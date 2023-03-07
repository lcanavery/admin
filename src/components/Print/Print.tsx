import { VARIANT } from "../../config";
import { variants } from "../../constants/variants";
// const bgTersuave = require("../../assets/images/icons/disal-18.png");
// const colorin = require("../../assets/images/icons/colorinLong.png");
// const bgIndustria = require("../../assets/images/icons/disal-17.png");

export const printTable = (
  data,
  columns,
  sucursal,
  sucursalSeleccionada,
  bgTersuave,
  colorin,
  bgIndustria
) => {
  // var content = printable.current;
  const cols = columns.map((c) =>
    c.valueGetter
      ? c.valueGetter
      : c.renderCell
      ? c.renderCell
      : (params) => `${params.row[c.field]}`
  );
  const headers = columns.reduce((headrs, col) => {
    return { ...headrs, [col.field]: col.headerName };
  }, {});

  const datos = data;

  var pri = document.getElementById("printable") as HTMLIFrameElement; // iframe.current.contentWindow;
  var img = "";
  var alt = "";
  const logos = {
    [variants.COLORIN]: colorin,
    [variants.TERSUAVE]: bgTersuave,
    [variants.INDUSTRIA]: bgIndustria,
  };

  pri.contentWindow.document.open();
  const html =
    `<style>@page {
      size: A4;
      margin: 11mm 17mm 17mm 17mm;
    }
    *{font-family:arial}
    table table, table table tr {
      border:1px solid #eee;
    }
    td{ border-bottom:1px solid #eee;}
    </style>
   
<table>
<thead><tr>
<td>

<div
style={{
  display: "grid",
  gridTemplateColumns: "4fr 1fr 1fr ",
}}
>

<img src=${logos[VARIANT]} alt=${
      logos[VARIANT]
    } style="float:right; height: 24px">
<div>Sucursal: ${
      sucursalSeleccionada ? sucursalSeleccionada.direccion : sucursal
    }</div>
<div style={{ textAlign: "right" }}></div>
<div style={{ textAlign: "right" }}>
 Fecha: ${new Date().toLocaleString("es-AR")}
</div>
</div>
<br/><br/>

  </td>
  </tr>
</thead>
  <tbody>
  <tr><td>
 <table>
 <thead>
    <tr> ${columns
      .filter((c) => c.printable !== false)
      .map((c) => {
        const dat = headers[c.field];

        return "<td>" + dat + "</td>";
      })
      .join("")}</tr>   


 </thead>
 ` +
    datos
      .map((d) => {
        return `<tr> ${columns
          .filter((c) => c.printable !== false)
          .map((c) => {
            const dat = c.renderCell
              ? c.renderCell({ row: d })
              : c.valueGetter
              ? c.valueGetter({ row: d })
              : d[c.field];

            return "<td>" + dat + "</td>";
          })
          .join("")}</tr>`;
      })
      .join("") +
    "</table> </td> </tr> </tbody></table>";
  pri.contentWindow.document.write(html);

  pri.contentWindow.document.close();
  pri.focus();
  pri.contentWindow.print();
};
