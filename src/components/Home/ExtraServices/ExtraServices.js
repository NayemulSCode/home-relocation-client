import React from 'react';
import './ExtraService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const ExtraServices = () => {
    return (
        <div className="row mainPart">
            <div className="col-md-5 col-sm-6">
                <img className="extraImg img-fluid" src="https://i.postimg.cc/fTZdpbkw/extraBG.jpg" alt=""/>
            </div>
            <div className="col-md-7 col-sm-6 d-flex leftpart">
                <div>
                    <ul>
                        <li><FontAwesomeIcon className="extraServiceIocns" icon={faCheckCircle} />নিজস্ব পরিবহন ব্যবস্থা</li>
                        <li><FontAwesomeIcon className="extraServiceIocns" icon={faCheckCircle} />অভিজ্ঞ টেকনিশিয়ান</li>
                        <li><FontAwesomeIcon className="extraServiceIocns" icon={faCheckCircle} />অভিজ্ঞ চালক</li>
                        <li><FontAwesomeIcon className="extraServiceIocns" icon={faCheckCircle} />বিশ্বমানের প্যাকিং</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><FontAwesomeIcon className="extraServiceIocns" icon={faCheckCircle} />নিজস্ব লেবার সুবিধা</li>
                        <li><FontAwesomeIcon className="extraServiceIocns" icon={faCheckCircle} />অভিজ্ঞ ইলেকট্রেশিয়ান</li>
                        <li><FontAwesomeIcon className="extraServiceIocns" icon={faCheckCircle} />নিরাপদ স্থানান্তর</li>
                        <li><FontAwesomeIcon  className="extraServiceIocns"icon={faCheckCircle} />২৪/৭ কাস্টমার সাপোর্ট</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExtraServices;