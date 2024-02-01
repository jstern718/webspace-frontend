/** External dependencies */

import React, { useEffect, useRef } from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

/** Internal dependencies */

//custom components built on top of mui defaults
import {MyBox, MyListItem, MyType} from '../style';
import '../App.css';

/** Pyodide related imports */

//download python script to run w/ pyodide
import script from '../python/main.py';



let globalX;

/** runScript function is wrapped around the python call so that the
  * python script is available as an arg and additional variables
  * can be put into python's general scope by using a setter function */

async function runScript (script, arrOfPrices){

    //check if data for calculations is inside function scope
    console.log("runscript arrOfPrices", arrOfPrices);

    //NOTE: why does relative path not work here?
    let pyodide = await window.loadPyodide({
        indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide"
    })
    // .then((result=>{

        /** Unsing a loop to save each item in the price array into python scope.
         * Then, on each loop, using pyodide to call the python script. The
         * script will reassemble the data into an array and return sum of
         * elements in that array. Will only make use of last return.
         *
         * Note: This is necessary here because have been unable to load any of
         * the proxies that can be used to create javascript objects that are
         * iterable in python. By sending variables one at a time, the need
         * for proxy variables is avoided */

        let response;

        // let priceCheck = pyodide.globals.get("total").toJs();
        // console.log("priceCheck", priceCheck);

        arrOfPrices.then(async (result)=>{
            console.log("result", result);
            for (let i=0; i<result.length; i++){
                globalX = result[i];
                let x = pyodide.globals.set("priceVar");
                pyodide.globals.set("priceVar", `${globalX}`);

                /** Once each variable is saved, we can use a getter function
                 * and log to check if variable is actually in python scope. */

                response = await pyodide.runPythonAsync(script);
                response.then(async (result)=>{
                    let priceCheck = pyodide.globals.get("total").toJs();
                    pyodide.globals.delete("total");
                    console.log("priceCheck", priceCheck);
                })
                .catch((err)=> {
                    console.log("catch for response");
                    throw Error(err);
                })
            }
            console.log("outer response", response);
            return await response;

        })
        .catch(err => {
            console.log("catch for arrOfPrices");
            throw Error(err);
        })
    // }))
    // .catch(err => {
    //     console.log("catch load pyodide");
    //     throw Error(err);
    // })
};

function Technologies(props){

    let {technologies, technologyObj, output, setOutput} = props.props[0];

    /** useRef hook allows you to capture a variable from useEffect. It
    must be setup outside of useEffect so that the variable you save is
    accessible in wider scope. */

    const refArr = useRef([]);

    useEffect(function(){

        /** makeArr function replicates the loop that displays information on
         * the page so that we can capture the price data to do calculations
         * on in python.
         */

        async function makeArr(){
            let arrOfPrices = [];
            await Array.isArray(technologies) && technologies.map((item) => (
                arrOfPrices.push(technologyObj[item.technology_name])
            ));
            console.log("makeArr ... arrOfPrices", arrOfPrices);
            return await arrOfPrices;
        }

        /** call makeArr and save its results to component level scope. */

        refArr.current = makeArr();

        /** run function fetchs the python script from main.py as text
         * and then calls the function that will run it, also sending
         * an array of the values to be put into python's scope as arg  */

        const run = async () => {
            const scriptText = await (await fetch(script)).text();
            const out = await runScript(scriptText, refArr.current);
            console.log("useEffect out", out);
            setOutput(out);
        }
          run();

    }, [technologies, technologyObj, setOutput]);

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

