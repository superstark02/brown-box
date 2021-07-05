import React, { Component } from 'react';

class Success extends Component {
    render() {
        return (
            <div>
                <div style={{ background: "transparent" }} >
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div className="wrap" >
                                    <div class="icon-box">
                                        <i class="material-icons">&#xE876;</i>
                                    </div>
                                </div>

                            </div>
                            <h4 style={{ textAlign: "center" }} class="modal-title">Awesome!</h4>
                            <div class="modal-body">
                                <p class="text-center">Your order is placed!! Check your email for details.</p>
                            </div>
                            <h3 style={{ textAlign: "center" }} >
                                Thank You <br /> For Shopping With Us<br />🙏
                            </h3>
                            <div>
                                <a href="/" className="wrap" >
                                    <button class="btn btn-success btn-block" style={{width:"100%", margin:"30px 0px"}} data-dismiss="modal">OK</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Success;