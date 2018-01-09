import React from 'react';

const OpenProjectSearch = (props) => {

    return (
            <div>
                <h5>PROJECT SEARCH</h5>
                <div className="col s12">
                <form>
                    <div className="form-group col s4">
                        <label>Requirements Keyword(s)</label>
                        <input name="keyword" onChange={props.onChange} type="text" className="form-control" id="keyword" placeholder="Keyword" />
                    </div>
                        <div className="form-group col s4">
                        <label>Start Date</label>
                        <input name="startDate" onChange={props.onChange} type="text" className="form-control" id="startDate" placeholder="Start Date" />
                    </div>
                        <div className="form-group col s4">
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