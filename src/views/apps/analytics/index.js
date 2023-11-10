// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";

// ** Third Party Components
import { Row, Col } from "reactstrap";

// ** Demo Components
import TableExpandable from "../../tables/data-tables/basic/TableExpandable";
import TableZeroConfig from "../../tables/data-tables/basic/TableZeroConfig";
import TableWithButtons from "../../tables/data-tables/basic/TableWithButtons";
import TableMultilingual from "../../tables/data-tables/basic/TableMultilingual";
import DataTablesReOrder from "../../tables/data-tables/basic/TableColumnReorder";

// ** Styles
import "@styles/react/libs/tables/react-dataTable-component.scss";

const Tables = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs
        // title="Datatables Basic"
        data={[{ title: "Datatables" }, { title: "Datatables Basic" }]}
      /> */}
      <Row>
        <Col sm="12">
          <TableWithButtons />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
