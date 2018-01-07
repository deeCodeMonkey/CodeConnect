import React from 'react';

const OpenProjectSearch = (props) => {

    return (
            <div className="row">
                <h5>PROJECT SEARCH</h5>
                <div className="col s12">
                <form>
                    <div className="form-group">
                        <label>Requirements Keyword(s)</label>
                        <input name="keyword" onChange={props.onChange} type="text" className="form-control" id="keyword" placeholder="Keyword" />
                    </div>
                        <label>Due Date Range</label>
                    <div className="form-group">
                        <label>Start Date</label>
                        <input name="startDate" onChange={props.onChange} type="text" className="form-control" id="startDate" placeholder="Start Date" />
                    </div>
                    <div className="form-group">
                        <label>End Date</label>
                        <input name="endDate" onChange={props.onChange} type="text" className="form-control" id="endDate" placeholder="End Date" />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={props.onSubmit}>Search</button>
                </form>
                </div>
                
            </div>
    );
};

export default OpenProjectSearch;