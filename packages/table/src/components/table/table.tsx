import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "wc-table",
  styleUrl: "table.scss",
  shadow: true,
})
export class IpTable {
  @Prop() thead: string;
  @Prop() tbody: string;

  @State() parsedThead: string[] = [];
  @State() parsedTbody: string[][] = [];

  componentWillLoad() {
    this.parseThead(this.thead);
    this.parseTbody(this.tbody);
  }

  parseThead(newValue: string) {
    try {
      const parsedThead = JSON.parse(newValue || "[]");

      if (Array.isArray(parsedThead)) {
        this.parsedThead = parsedThead;
      } else {
        console.error("Invalid thead structure. Expected an array of strings.");
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

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.parsedThead.map((header) => (
              <th>{header}</th>
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
