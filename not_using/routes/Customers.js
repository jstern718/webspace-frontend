
import React, { useEffect, useState } from "react";
import WebspaceApi from "../api";

function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function fetchCustomers() {
            try {
                // const path = window.location.pathname;
                // console.log("customers path", path);
                const response = await WebspaceApi.getTable("http://localhost:3001/api/customers");
                // console.log("customers", response);
                setCustomers(response); // Assuming response is an object with a 'data' key containing the customer data
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        }

        fetchCustomers();
    }, []);

    setCustomers();

    return (
        <div>
            <p>Customers</p>
            {/* Use 'customers' state to display the fetched data */}
            {customers.map(customer => (
                <div key={customer.id}>
                    {/* Display customer details */}
                </div>
            ))}
        </div>
    );
}

export default Customers;




// import React from "react";
// import WebspaceApi from "../api";

// function Customers() {

//     // const [pageState, setPageState] = useState({ isLoading: true, jobs: [] });

//     async function customerSearch(path) {
//         const customers = await WebspaceApi.getTable(path);
//         console.log("customers", customers);
//         return customers;
//     }

//     let path = window.location.pathname;
//     console.log("customers path", path)
//     let display = customerSearch(path)
//     console.log("customers display", display);


//     return (
//       <div>
//           <p>Customers</p>
//       </div>
//     );
//   }

// export default Customers;