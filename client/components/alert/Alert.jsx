import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";

const Alert = () => {
    const { alert } = useSelector((state) => state);
    return (
        <div>
            {alert.loading && <Loading />}
            {alert.error && (
                <Toast
                    title="Errors"
                    body={alert.error || ""}
                    bgColor="bg-danger"
                />
            )}

            {alert.success && (
                <Toast
                    title="Success"
                    body={alert.success}
                    bgColor="bg-success"
                />
            )}
        </div>
    );
};

export default Alert;
