'use client'
import Dashboard from "@/components/Dashboard"
import TableOrders from "@/components/Table/TableOrders"
import { Typography, Button } from "@mui/material"
import { useSelector } from "react-redux"
const Orders=()=>{
    
    return(
        <Dashboard>
          <Typography variant="h6" sx={{mt:2}} >
            ORDENES
          </Typography>
          <Button variant="contained" sx={{mt:4}} color="primary">
            Crear Orden de compra
          </Button>
          <TableOrders/>
        </Dashboard>
    )
}
export default Orders