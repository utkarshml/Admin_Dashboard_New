import { ColumnDef, flexRender,  getCoreRowModel,  SortingState ,  getPaginationRowModel,  getSortedRowModel,  useReactTable  } from "@tanstack/react-table"
import "../styles/table.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { FcGenericSortingAsc, FcGenericSortingDesc } from "react-icons/fc";


interface DataTableProp<TData> {
  columns: ColumnDef<TData>[],
  data: TData[],
  pageSize?: number,
  isPagination ?: true
}
function GetTable<TData>({ columns, data ,pageSize  = 5 ,isPagination}: DataTableProp<TData>) {
  const [sorting, setSorting] =  useState<SortingState>([])
  const {getHeaderGroups, getRowModel , previousPage , nextPage , getCanNextPage , getCanPreviousPage ,getPageCount , getState  } = useReactTable({
     columns,
     data ,
     onSortingChange : setSorting,
     getCoreRowModel : getCoreRowModel(),
     getPaginationRowModel : getPaginationRowModel(),
     getSortedRowModel : getSortedRowModel(),
     state : {
      sorting
     },
     debugTable : true,
     initialState : {
      pagination : {
        pageSize ,
        pageIndex : 0
      }
     }
  })

  return (
  <> <table >
      <thead  >
        {getHeaderGroups().map(hg => {
          return (<tr key={hg.id}>
            {hg.headers.map(header => {
              return (<th style={{
                cursor : `${header.column.getCanSort() ? "pointer" : "unset" }`
              }} key={header.id} onClick={header.column.getToggleSortingHandler()}>
              
  
                {flexRender(header.column.columnDef.header, header.getContext())
                } 
                <span className="primary" style={{marginLeft : "8px"}}>
                {{
                          asc: <FcGenericSortingAsc />,
                          desc: <FcGenericSortingDesc/>,
                        }[header.column.getIsSorted() as string] ?? null}
                </span>
                </th>)
            })}
          </tr>)
        })}
      </thead>
      <tbody>
        {getRowModel().rows?.length ?
          getRowModel().rows.map(rw => {
            return (<tr key={rw.id}>
              {rw.getVisibleCells().map(row => {
                return (<td key={row.id}>{
                    
                  flexRender(row.column.columnDef.cell, row.getContext())}
                  </td>)
              })}
            </tr>)
          }) : <tr>
            <td colSpan={3}>There no row</td>
          </tr>
        }
      </tbody>
    </table>
    {isPagination && (getPageCount() > 1) && <div className="pagination">
         <button disabled={!getCanPreviousPage()} onClick={() => previousPage()} className="pre primary-bg"><FaArrowLeft/></button>
         <span className="page-details">
              {getState().pagination.pageIndex + 1  } of {getPageCount()}
         </span>
         <button disabled={!getCanNextPage()} onClick={() => nextPage()} className="next primary-bg"><FaArrowRight/></button>
      </div>}
    </> 
  )

}

export default GetTable

