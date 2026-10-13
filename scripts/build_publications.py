#!/usr/bin/env python3
"""Rebuild the publication pages from papers.xlsx.

The spreadsheet is the source. Re-run this after adding or editing a row:

    python3 scripts/build_publications.py
"""

import os
import zipfile
from xml.etree import ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
XLSX = os.path.join(ROOT, "papers.xlsx")
NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def load_rows():
    with zipfile.ZipFile(XLSX) as workbook:
        shared = []
        root = ET.fromstring(workbook.read("xl/sharedStrings.xml"))
        for item in root.findall("m:si", NS):
            texts = [
                node.text or ""
                for node in item.iter(
                    "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t"
                )
            ]
            shared.append("".join(texts))
        sheet = ET.fromstring(workbook.read("xl/worksheets/sheet1.xml"))
        rows = []
        for row in sheet.findall(".//m:sheetData/m:row", NS)[1:]:
            values = {}
            for cell in row.findall("m:c", NS):
                column = "".join(ch for ch in cell.attrib.get("r", "") if ch.isalpha())
                kind = cell.attrib.get("t")
                node = cell.find("m:v", NS)
                if node is None:
                    value = ""
                elif kind == "s":
                    value = shared[int(node.text)]
                else:
                    value = node.text
                values[column] = value
            if values.get("A") and values.get("J"):
                rows.append(values)
    rows.sort(key=lambda row: row.get("H", ""), reverse=True)
    return rows


def paper_url(bibcode):
    # SciXplorer replaces ADS abstract pages. ADS links redirect here from 16 November 2026.
    return "https://scixplorer.org/abs/%s/abstract" % bibcode.replace("&", "%26")


def bullet(row):
    year = (row.get("H") or "")[:4]
    author = row.get("C", "").strip()
    title = row.get("J", "").strip().replace('"', "'")
    link = "[SciX](%s)" % paper_url(row["A"])
    return '- %s et al. %s, "%s," %s' % (author, year, title, link)


def page(path, title, permalink, nav, nav_order, description, rows, comment, intro=""):
    years = []
    for row in rows:
        year = (row.get("H") or "")[:4]
        if not years or years[-1][0] != year:
            years.append((year, []))
        years[-1][1].append(bullet(row))
    body = []
    if intro:
        body.append(intro)
        body.append("")
    for year, lines in years:
        body.append("## %s" % year)
        body.append("")
        body.extend(lines)
        body.append("")
    text = "\n".join(
        [
            "---",
            "layout: page",
            'title: "%s"' % title,
            "permalink: %s" % permalink,
            "nav: %s" % ("true" if nav else "false"),
            "nav_order: %d" % nav_order,
            'description: "%s"' % description.replace('"', "'"),
            "---",
            "",
            "<!-- %s -->" % comment,
            "",
            "\n".join(body).strip(),
            "",
        ]
    )
    with open(path, "w") as handle:
        handle.write(text)
    print("wrote", path, "papers", len(rows))


def main():
    rows = load_rows()
    scat = [row for row in rows if row.get("B", "").lower() == "y"]
    page(
        os.path.join(ROOT, "_pages", "publications.md"),
        "Publications",
        "/publications/",
        True,
        3,
        "Journal articles and preprints, newest first.",
        rows,
        "How to add a paper: docs/README.md#publications",
    )
    page(
        os.path.join(ROOT, "_pages", "rare-transients-publications.md"),
        "SCAT publications",
        "/research/rare-and-exotic-transients/publications/",
        False,
        0,
        "Papers from the SCAT survey, newest first.",
        scat,
        "How to add a SCAT paper: docs/README.md#publications",
        "These are the SCAT papers only. The [full publication list](/publications/) is separate.",
    )


if __name__ == "__main__":
    main()
