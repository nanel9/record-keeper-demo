import React from "react";
import "./styles.scss";

const Table = (props) => {
  const { data } = props;
  return (
    <div className="cg-table">
      {data.title && (
      <div className="table-header">
        <div className="table-title">
          {data.title}
        </div>
        {data.widgets && (
            <div className="table-widgets">
              {data.widgets.map((widget) => (
                <div className="table-widget" key={widget.key}>
                  {widget}
                </div>
              ))}
            </div>
          )}
      </div>
      )}
      <table>
        {data.headers && (
          <thead>
            <tr>
              {data.headers.map((header) => (
                <th height={header.height} width={header.width} colspan={header.colspan} key={header.key} style={{ textAlign: header.align }}>
                  {header.content}
                </th>
              ))}
            </tr>
          </thead>
        )}
        {data.rows && (
          <tbody>
            {data.rows.map((row) => (
              <tr>
                {row.columns.map((column) => (
                  <td width={column.width} colspan={column.colspan} key={column.key} style={{ textAlign: column.align }}>
                    {column.content}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
        {data.footer && (
          <tfoot>
            <tr>
              {data.footer.map((footer) => (
                <td
                  width={footer.width}
                  colspan={footer.colspan}
                  key={footer.key}
                  style={{ textAlign: footer.align }}
                >
                  {footer.content}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default Table;
