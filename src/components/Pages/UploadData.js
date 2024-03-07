import React   from 'react'
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";


function UploadData() {
const columns =[
    {
      name: 'Name',
      selector: row => row.name,
      sortable:true
    },
    {
      name: 'Number',
      selector: row => row.number,
      sortable:true
    },
    {
      name: 'Agent',
      selector: row => row.agent,
      sortable:true
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable:true
    },
    {
      name: 'Service',
      selector: row => row.service,
      sortable:true
    },
    
   ];
   
    const data =[
    {
       id: 1,
       name: 'Abhilekh Singh',
       number: 'XXXXXXXXXX',
       agent: 'Komal',
       status: 'Won',
       service: 'Digital Services',
      },
      {
        id: 2,
        name: 'Subhash Singh',
        number: 'XXXXXXXXXX',
        agent: 'Neha',
        status: 'Won',
        service: 'Digital Services',
       },
       {
        id: 3,
        name: 'Juhi Mishra',
        number: 'XXXXXXXXXX',
        agent: 'Neha',
        status: 'Won',
        service: 'Digital Services',
       },
      
    ]
    const customStyles = {
      cells: {
        style: {
          border: "0px solid #ddd", // Set the cell border
          fontSize: "14px",
          // background: "#f4f3fe",
        },
      },
      headCells: {
        style: {
          border: "0px solid #111", // Set the header cell border
          fontSize: "14px",
          background: "#f0f0f0",
        },
      },
      rows: {
        style: {
          background: "#fdf1f1", // Set the default background color
        },
      },
      highlightOnHover: {
        style: {
          background: "#f4f3fe", // Set the background color on hover
        },
      },
      striped: {
        style: {
          background: "#f8f9fa", // Set the background color for striped rows
        },
      },
    };
  return (
    <div>
      <div className="content-wrapper">
        <section className="content content-header  py-5">
          <div className="container">
            <div className="panel panel-bd lobidrag lobipanel">
              <div className="panel-heading">
                <div className="btn-group bg-white ">
                  <h4>Upload Data </h4>
                </div>

                <form>
                <div className="row">
                <div calssName="col-lg-3 col-xl-3 col-md-3 col-sm-3"> 
                   <div className="form-group">
                     <label htmlFor="fileInput">Choose file</label>
                      <input type="file" className="form-control-file" id="fileInput" />
                    </div>
                </div>
                <div calssName="col-lg-3 col-xl-3 col-md-3 col-sm-3"> 
                <button type="submit" className="button-57 buttonns_057">
                  Upload
                </button>
                </div>
                </div>
              
              </form>
              
              </div>

              <div className="panel-body bg-white ">
                 <div className="">
                 
                   <DataTable
                   responsive
                   customStyles={customStyles}
                    columns={columns}
                    data={data}
                    selectableRows
                    fixedHeader
                    pagination
                    selectableRowsHighlight
                    highlightOnHover
                    
                   >
                   
                   </DataTable>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default UploadData;
