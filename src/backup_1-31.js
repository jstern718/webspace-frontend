//Technologies

const refArr = useRef([]);
/** External dependencies */

import React, { useEffect, useRef } from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

/** Internal dependencies */

import '../App.css';
import {MyBox, MyListItem, MyType} from '../style';
import script from '../python/main.py';

async function runScript (arrOfPrices){

    const pyodide = await window.loadPyodide({
        indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
    });

    // console.log("runscript arrOfPrices", arrOfPrices);

    let my_namespace = await pyodide.globals.get("dict")();
    await pyodide.runPythonAsync(`arr = ${arrOfPrices}`, {globals: my_namespace});
    await pyodide.runPythonAsync(`
        sum = 0

        if arr:
            for elem in arr:
                sum = sum + elem

        `, { globals: my_namespace });

    let sum = await pyodide.globals.get("sum");
    console.log("sum", sum);

    // let my_prices = { arrOfPrices : arrOfPrices};
    // await pyodide.registerJsModule("my_prices", my_prices);
    // console.log("runscript ... script", script);
    // return await pyodide.runPythonAsync(script, );

}

function Technologies(props){

    let {technologies, technologyObj, output, setOutput} = props.props[0];

    const refArr = useRef([]);

    useEffect(function(){

        async function makeArr(){
            let arrOfPrices = [];
            Array.isArray(technologies) && technologies.map((item) => (
                arrOfPrices.push(technologyObj[item.technology_name])
            ));
            console.log("makeArr ... arrOfPrices", arrOfPrices);

            return arrOfPrices;
        };
        refArr.current = makeArr();
        console.log("useEffect ... refArr.current", refArr.current);

        const run = async () => {
            // const scriptText = await (await fetch(script)).text();
            const out = await runScript(refArr.current);
            console.log("useEffect out", out);
            setOutput(out);
          }
        run();

    }, [technologies, technologyObj, setOutput]);



    // function getPrice(price){
    //    arrOfPrices.push(price);
    //    console.log("arrOfPrices", arrOfPrices);
    //    return price;
    // }


    console.log("technologyObj", technologyObj);

    return(
        <MyBox key={getId()} >
            <MyType key={getId()}>
                Technologies Used
            </MyType>
            <List key={getId()}>
                {Array.isArray(technologies) && technologies.map((item) => (
                     <div key={getId()}>
                        <MyListItem key={getId()}>
                            <ListItemText
                                key={getId()}
                                primary={`•  Id ﹟${item.id}:
        Technology: ... ${item.technology_name}
        Price: ... $${technologyObj[item.technology_name]}`}
                                sx={{whiteSpace: "pre-wrap" }}/>
                         </MyListItem>
                    </div>
                ))}
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`Technologies Price Total: ${output}`}
                        sx={{whiteSpace: "pre-wrap" }}/>
                </MyListItem>
            </List>

        </MyBox>
    )
}

export default Technologies;


 // arrOfPrices.push(technologyObj[item.technology_name]),
