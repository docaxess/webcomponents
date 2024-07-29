import { Component, h, Prop, State } from "@stencil/core";

interface Column {
  header: string;
  type: "string" | "number";
}

@Component({
  tag: "ip-table",
  styleUrl: "table.scss",
  shadow: true,
})
export class IpTable {
  @Prop() thead: string;
  @Prop() tbody: string;

  @State() parsedThead: Column[] = [];
  @State() parsedTbody: string[][] = [];
  @State() sortedColumn: number = null;
  @State() isAscending: boolean = true;

  componentWillLoad() {
    this.parseThead(this.thead);
    this.parseTbody(this.tbody);
  }

  parseThead(newValue: string) {
    try {
      const parsedThead = JSON.parse(newValue || "[]");

      if (
        Array.isArray(parsedThead) &&
        parsedThead.every(
          (item) =>
            typeof item === "object" &&
            item !== null &&
            "header" in item &&
            "type" in item,
        )
      ) {
        this.parsedThead = parsedThead;
      } else {
        console.error(
          "Invalid thead structure. Expected an array of objects with 'header' and 'type' properties.",
        );
      }
    } catch (error) {
      console.error("Invalid thead:", error);
    }
  }

  parseTbody(newValue: string) {
    try {
      const parsedTbody = JSON.parse(newValue || "[]");

      if (
        Array.isArray(parsedTbody) &&
        parsedTbody.every((row) => Array.isArray(row))
      ) {
        this.parsedTbody = parsedTbody;
      } else {
        console.error("Invalid tbody structure. Expected an array of arrays.");
      }
    } catch (error) {
      console.error("Invalid tbody:", error);
    }
  }

  sortColumn(index: number) {
    if (this.sortedColumn === index) {
      this.isAscending = !this.isAscending;
    } else {
      this.sortedColumn = index;
      this.isAscending = true;
    }

    this.parsedTbody.sort((a, b) => {
      const valueA = a[index];
      const valueB = b[index];

      if (this.parsedThead[index].type === "number") {
        return this.compareNumbers(parseFloat(valueA), parseFloat(valueB));
      } else {
        return this.compareCellValues(valueA, valueB);
      }
    });
  }

  compareCellValues(a: string, b: string): number {
    return a.localeCompare(b) * (this.isAscending ? 1 : -1);
  }

  compareNumbers(a: number, b: number): number {
    if (a < b) {
      return this.isAscending ? -1 : 1;
    } else if (a > b) {
      return this.isAscending ? 1 : -1;
    } else {
      return 0;
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.parsedThead.map((column, index) => (
              <th>
                {column.header}
                <button
                  aria-label={`Sort by ${column.header}`}
                  onClick={() => this.sortColumn(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    class={this.sortedColumn === index ? "focus-style" : ""}
                    aria-hidden="true"
                  >
                    <g clip-path="url(#clip0_2545_1451)">
                      <path
                        d={`M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z`}
                        fill="white"
                        transform={`rotate(${this.sortedColumn === index && this.isAscending ? 180 : 0} 8.5 8)`}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2545_1451">
                        <rect
                          x="0.5"
                          width="16"
                          height="16"
                          rx="8"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.parsedTbody.map((row) => (
            <tr>
              {row.map((cell) => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
