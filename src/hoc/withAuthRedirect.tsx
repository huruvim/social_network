import {Redirect} from "react-router-dom";
import React from "react";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

export type MapStatePropsForRedirectType = {
    isAuth: boolean
}

export const mapStateToPropsForRedirect = (state: AppRootStateType): MapStatePropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    function RedirectComponent(props: WCP & MapStatePropsForRedirectType) {
        if (!props.isAuth) return <Redirect to={"/login"}/>
        else return <Component {...props as unknown as WCP}/>
    }

    const ConnectedAuthRedirectComponent = connect<any, {}, WCP, AppRootStateType>(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}