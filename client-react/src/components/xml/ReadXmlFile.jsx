import React, { Component } from 'react';
import axios from "axios";

class ReadXmlFile extends Component {
    
    submitFile = async (e) => {
        e.preventDefault();
        document.getElementById('submitbtn').disabled = true;
        document.getElementById('submitbtn').innerText = "Submiting";

        const res = await axios.post('http://localhost:8000/api/read-xml');

        if(res.data.status === 200)
        {   
            console.log("Data Added Successfully");
            document.getElementById('submitbtn').disabled = false;
            document.getElementById('submitbtn').innerText = "Submit";
        }
        else
        {
            console.log("Error");
            document.getElementById('submitbtn').disabled = true;
            document.getElementById('submitbtn').innerText = "Submiting";
        }
    }

    render(){
        return(
            <div className="container">
                <h4 className="text-center">How To Upload And Save XML Data in Laravel 8 - Online Web Tutor</h4>

                <form onSubmit={this.submitFile} className="flex items-center space-x-6 my-4">
                    <label className="block">
                        <input type="file" className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        "/>
                    </label>
                    <button type="submit" id="submitbtn" className=" block text-sm text-white rounded-full border-0 font-semibold bg-blue-600 py-2 px-4">Submit</button>
                </form>
            </div>
        );
    }
}

export default ReadXmlFile;