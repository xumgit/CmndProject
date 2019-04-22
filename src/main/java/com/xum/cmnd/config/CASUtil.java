//package com.xum.cmnd.config;
//
//import org.jasig.cas.client.authentication.AttributePrincipal;
//import org.jasig.cas.client.util.AbstractCasFilter;
//import org.jasig.cas.client.validation.Assertion;
//
//import javax.servlet.http.HttpServletRequest;
//
//public class CASUtil {
//
//    /**
//     * 从cas中获取用户名
//     *
//     * @param request
//     * @return
//     */
//    public static String getAccountNameFromCas(HttpServletRequest request) {
//        Assertion assertion = (Assertion) request.getSession().getAttribute(AbstractCasFilter.CONST_CAS_ASSERTION);
//        if (assertion!= null) {
//            AttributePrincipal principal = assertion.getPrincipal();
//            return principal.getName();
//        } else return null;
//
//    }
//
//}
