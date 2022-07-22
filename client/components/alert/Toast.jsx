// import * as React from "react";
// import { useDispatch } from "react-redux";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";
// import { ALERT } from "../../redux/action/auth.action";

// const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// export default function Toast({ severity, body }) {
//     // const [open, setOpen] = React.useState(false);
//     const dispatch = useDispatch();

//     // const handleClick = () => {
//     //     setOpen(true);
//     // };

//     const handleClose = () => {
//         // if (reason === "clickaway") {
//         //     return;
//         // }
//         dispatch({ type: ALERT, payload: {} });

//         // setOpen(false);
//     };

//     return (
//         <Snackbar autoHideDuration={4000}>
//             <Alert
//                 onClose={handleClose}
//                 severity={severity}
//                 sx={{ width: "100%" }}
//             >
//                 {typeof body === "string" ? (
//                     body
//                 ) : (
//                     <ul>
//                         {body.map((text) => (
//                             <li key={`${Math.random()}-${text}`}>{text}</li>
//                         ))}
//                     </ul>
//                 )}
//             </Alert>
//         </Snackbar>
//     );
// }

import { useDispatch } from "react-redux";
import { ALERT } from "../../redux/action/auth.action";

const Toast = ({ title, body, bgColor }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({ type: ALERT, payload: {} });
    };

    return (
        <div
            className={`toast show position-fixed text-light ${bgColor}`}
            style={{ top: "5px", right: "5px", zIndex: 500, minWidth: "200px" }}
        >
            <div className={`toast-header text-light ${bgColor}`}>
                <strong className="me-auto">{title}</strong>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    onClick={handleClose}
                />
            </div>

            <div className="toast-body">
                {typeof body === "string" ? (
                    body
                ) : (
                    <ul>
                        {body.map((text) => (
                            <li key={`${Math.random()}-${text}`}>{text}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Toast;
