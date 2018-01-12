import "./OpenProjectSearch.css"
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import DatePicker from 'react-datepicker';


const OpenProjectSearch = (props) => {

    return (


        <div>
            <div id="project-search-title" className="valign-wrapper">
                <h4>PROJECT SEARCH</h4>
            </div>

            <div id="search-form">
                <form>
                    <div className="form-group col s4">
                        <input name="keyword" onChange={props.onChange} type="text" className="form-control" id="keyword" placeholder="Keyword" value={props.keyword} />

                    </div>
                    <div className="form-group col s4">
                        <DatePicker
                            selected={props.startDate ? props.startDate : null}
                            onChange={props.onChangeStartDate}
                            placeholderText="Start Date"
                        />
                    </div>
                    <div className="form-group col s4">
                        <DatePicker
                            selected={props.endDate ? props.endDate : null}
                            onChange={props.onChangeEndDate}
                            placeholderText="End Date"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OpenProjectSearch;