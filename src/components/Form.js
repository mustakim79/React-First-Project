import React from "react";
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prodname: "",
            prodprice: 0,
        }
    }
    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-primary my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <form action="" onSubmit=
                        {
                            (e) => {
                                e.preventDefault()
                                this.props.addOrder(this.state.prodname, Number(this.state.prodprice))
                            }
                        }>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Add New Product
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlfor="prodname" className="form-label">Product name</label>
                                        <input type="text" onChange={
                                            (e) => {
                                                this.setState({ prodname: e.target.value })
                                            }} className="form-control" name="prodname" value={this.state.prodname} id="prodname" aria-describedby="helpId" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlfor="prodprice" className="form-label">Product price</label>
                                        <input type="number" onChange={
                                            (e) => {
                                                this.setState({ prodprice: e.target.value })
                                            }} className="form-control" name="prodprice" value={this.state.prodprice} id="prodprice" aria-describedby="helpId" placeholder="" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>);
    }
}

export default Form;