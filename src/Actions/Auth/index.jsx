import axios from "axios";
import { Ip_Info, baseUrl, forgot, login, profile, register, resend_otp, reset, verify_email, verify_forgot_otp } from "../Constants"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getToken, setToken } from "../Cookies";

const useAuth = () => {
    const navigate = useNavigate()

    const Signup = async (values, setLoading) => {
        setLoading(true)
        values.name = (values.email).split('@')[0];
        var formdata = new FormData();
        formdata.append("email", values.email);
        formdata.append("password", values.password);
        formdata.append("password_confirmation", values.confirm);
        formdata.append("name", values.name);
        var requestOptions = {
            method: 'POST',
            headers: {
                Accept: "application/json",
            },
            body: formdata,
        };
        fetch(baseUrl + register, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false)
                if (result.errors) {
                    if (result.errors.email) {
                        toast.error(result.errors.email[0])
                    } else {
                        toast.error('Something went wrong!')
                    }
                    return
                }
                if (result.status) {
                    toast.success('Account Created Successfully!');
                    setToken(result.data.barear_token)
                    navigate('/verify');
                }
            })
            .catch(error => {
                toast.error('Something went wrong!')
                console.log('error', error)
            });
    }

    const otpVerification = async (values, setLoading) => {
        setLoading(true)
        var formdata = new FormData();
        formdata.append("otp", values.otp);
        var requestOptions = {
            method: 'POST',
            headers: {
                Accept: "application/json",
                Authorization: getToken()
            },
            body: formdata,
        };
        fetch(baseUrl + verify_email, requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    toast.success('Email Verified');
                    navigate('/')
                } else {
                    toast.error('Invalid Code!');
                }
                setLoading(false)
            })
    }

    const forgotOtpVerification = async (values, setLoading) => {
        setLoading(true)
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.has('forgot')) {
            let email = decodeURIComponent(queryParams.get('forgot'));
            var formdata = new FormData();
            formdata.append("otp", values.otp);
            formdata.append("email", email);
            var requestOptions = {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                },
                body: formdata,
            };
            fetch(baseUrl + verify_forgot_otp, requestOptions)
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        toast.success('Email Verified');
                        navigate('/reset?forgot=' + encodeURIComponent(email))
                    } else {
                        toast.error('Invalid Code!');
                    }
                    setLoading(false)
                })
        } else {
            navigate('/login')
            toast.error('Something went wrong!')
        }

    }

    const resetPassword = async (values, setLoading) => {
        setLoading(true)
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.has('forgot')) {
            let email = decodeURIComponent(queryParams.get('forgot'));
            var formdata = new FormData();
            formdata.append("password", values.password);
            formdata.append("email", email);
            var requestOptions = {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                },
                body: formdata,
            };
            fetch(baseUrl + reset, requestOptions)
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        toast.success('Password reset successfully!');
                        navigate('/login')
                    } else {
                        toast.error('Invalid Code!');
                    }
                    setLoading(false)
                })
        } else {
            navigate('/login')
            toast.error('Something went wrong!')
        }

    }

    const getUserData = async (setUserData, setIsLogin, setLoading) => {
        setLoading(true)
        var requestOptions = {
            headers: {
                Accept: "application/json",
                Authorization: getToken()
            },
        };
        fetch(baseUrl + profile, requestOptions)
            .then(resp => resp.json())
            .then(data => {
                if (data.status) {
                    if (data.data.user.email_verified) {
                        setIsLogin(true)
                        setUserData(data.data);
                    }
                } else {
                    setIsLogin(false)
                }
                setLoading(false)
            })
    }

    const forgotPassword = async (values, setLoading) => {
        setLoading(true)
        var formdata = new FormData();
        formdata.append("email", values.email);
        var requestOptions = {
            method: 'POST',
            headers: {
                Accept: "application/json",
                Authorization: getToken()
            },
            body: formdata,
        };
        fetch(baseUrl + forgot, requestOptions)
            .then(resp => resp.json())
            .then(data => {
                if (data.status) {
                    toast.success(data.data.message);
                    navigate('/verify?forgot=' + encodeURIComponent(values.email));
                } else if (data.data.message) {
                    toast.error(data.data.message)
                } else {
                    toast.error('Something went wrong!')
                }
                setLoading(false)
            })
    }

    const userLogin = async (values, setLoading) => {
        setLoading(true)
        var formdata = new FormData();
        formdata.append("email", values.email);
        formdata.append("password", values.password);
        formdata.append("device_id", values.email);
        formdata.append("device_type", "web");
        formdata.append("app_version", "1");
        formdata.append("device_name", "device_name");

        var requestOptions = {
            method: 'POST',
            headers: {
                Accept: "application/json",
            },
            body: formdata,
        };
        fetch(baseUrl + login, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false)
                if (result.errors) {
                    if (result.errors.email) {
                        toast.error(result.errors.email[0])
                    } else {
                        toast.error('Something went wrong!')
                    }
                    return
                }
                if (result.status) {
                    if (result.data.user.email_verified == false) {
                        navigate('/verify');
                        toast.warning('Verify your email!');
                        var requestOptions = {
                            headers: {
                                Accept: "application/json",
                                Authorization: getToken()
                            },
                        };
                        fetch(baseUrl + resend_otp, requestOptions)
                            .then(resp => resp.json())
                            .then(data => {

                            })
                    } else {
                        toast.success('Logged In Successfully!');
                        setToken(result.data.token)
                        navigate('/');
                    }
                }
            })
            .catch(error => {
                toast.error('Something went wrong!')
                console.log('error', error)
            });
    }

    const Resend = async () => {
        var requestOptions = {
            headers: {
                Accept: "application/json",
                Authorization: getToken()
            },
        };
        fetch(baseUrl + resend_otp, requestOptions)
            .then(resp => resp.json())
            .then(data => {
                toast.success('Code resent successfully!');
            })
    }

    const General = async (setGetApi, setIsProtected) => {
        fetch(baseUrl + Ip_Info)
            .then(resp => resp.json())
            .then(data => {
                if (data?.status) {
                    setGetApi(data?.data?.info?.ip);
                    setIsProtected(data?.data?.info?.protected)
                }
            });
    }

    return { Signup, otpVerification, getUserData, userLogin, forgotPassword, forgotOtpVerification, resetPassword, Resend, General }
}

export default useAuth