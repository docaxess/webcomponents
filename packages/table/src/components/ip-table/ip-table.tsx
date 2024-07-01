import { Component, h, Prop, State } from "@stencil/core";

interface tableOption {
  name: string;
  number: number;
  category: string;
  price: number;
  status: string;
}

@Component({
  tag: "ip-table",
  styleUrl: "ip-table.scss",
  shadow: true,
})
export class IpTable {
  @Prop() options: string;

  @State() parsedOptions: tableOption[] = [];
  @State() sortDirection: { [key in keyof tableOption]: "asc" | "desc" } = {
    name: "asc",
    number: "asc",
    category: "asc",
    price: "asc",
    status: "asc",
  };

  componentWillLoad() {
    this.parseOptions(this.options);
  }

  parseOptions(newValue: string) {
    try {
      const parsedOptions = JSON.parse(newValue || "[]");

      if (
        Array.isArray(parsedOptions) &&
        parsedOptions.every(
          (option) =>
            "name" in option &&
            "number" in option &&
            "category" in option &&
            "price" in option &&
            "status" in option
        )
      ) {
        this.parsedOptions = parsedOptions;
      } else {
        console.error(
          'Invalid options structure. Expected an array of objects with "name", "number", "category", "price" and "status" properties.'
        );
      }
    } catch (error) {
      console.error("Invalid options:", error);
    }
  }

  sortTable(column: keyof tableOption) {
    if (this.sortDirection[column] === "asc") {
      this.parsedOptions.sort((a, b) => (a[column] > b[column] ? 1 : -1));
      this.sortDirection[column] = "desc";
    } else {
      this.parsedOptions.sort((a, b) => (a[column] < b[column] ? 1 : -1));
      this.sortDirection[column] = "asc";
    }
    this.parsedOptions = [...this.parsedOptions];
    this.sortDirection = { ...this.sortDirection };
  }

  render() {
    const filterSvg = (column: keyof tableOption) => {
      const isAscending = this.sortDirection[column] === "asc";
      const focusClass = column === "name" ? "focus-style" : ""; // Adjust focus style conditionally

      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          class={focusClass}
        >
          <g clip-path="url(#clip0_2545_1451)">
            <path
              d={`M13.9618 5.80875C13.924 5.71738 13.8599 5.63928 13.7777 5.58432C13.6955 5.52936 13.5988 5.50002 13.4999 5.5H3.49991C3.40096 5.49992 3.30421 5.5292 3.22191 5.58414C3.13962 5.63908 3.07547 5.71719 3.03759 5.8086C2.99972 5.90002 2.98982 6.00061 3.00914 6.09765C3.02847 6.1947 3.07615 6.28382 3.14616 6.35375L8.14616 11.3538C8.19259 11.4002 8.24774 11.4371 8.30844 11.4623C8.36913 11.4874 8.4342 11.5004 8.49991 11.5004C8.56561 11.5004 8.63068 11.4874 8.69138 11.4623C8.75207 11.4371 8.80722 11.4002 8.85366 11.3538L13.8537 6.35375C13.9236 6.28379 13.9711 6.19466 13.9904 6.09765C14.0096 6.00064 13.9997 5.9001 13.9618 5.80875Z`}
              fill="white"
              transform={`rotate(${isAscending ? 0 : 180} 8.5 8)`}
            />
          </g>
          <defs>
            <clipPath id="clip0_2545_1451">
              <rect x="0.5" width="16" height="16" rx="8" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    };

    const statusSvg = (status: string) => {
      if (status === "In Stock") {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="status-svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="#3CC13B"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
        );
      } else if (status === "Backorder") {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="status-svg red"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="#FF4136"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
        );
      }
      return null;
    };

    return (
      <table>
        <thead>
          <tr>
            <th>
              Name
              <button onClick={() => this.sortTable("name")}>
                {filterSvg("name")}
              </button>
            </th>
            <th>
              Number
              <button onClick={() => this.sortTable("number")}>
                {filterSvg("number")}
              </button>
            </th>
            <th>
              Category
              <button onClick={() => this.sortTable("category")}>
                {filterSvg("category")}
              </button>
            </th>
            <th>
              Price
              <button onClick={() => this.sortTable("price")}>
                {filterSvg("price")}
              </button>
            </th>
            <th>
              Status
              <button onClick={() => this.sortTable("status")}>
                {filterSvg("status")}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.parsedOptions.map((option) => (
            <tr key={option.number}>
              <td>{option.name}</td>
              <td>{option.number}</td>
              <td>{option.category}</td>
              <td>{option.price}</td>
              <td>
                {option.status === "In Stock" ? (
                  <span>
                    {statusSvg("In Stock")}
                    In Stock
                  </span>
                ) : (
                  <span>
                    {statusSvg("Backorder")}
                    Backorder
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
