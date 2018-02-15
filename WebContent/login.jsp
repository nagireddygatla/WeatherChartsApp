<%@page import="java.awt.geom.CubicCurve2D"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"  pageEncoding="ISO-8859-1" import="java.util.*"%>
<%@ page import="java.sql.*, javax.sql.*, java.io.*, javax.naming.*" %>
<%

String uName=null;

if(request.getParameter("userid")!=""){
	uName = request.getParameter("userid");
}

	request.getSession().setAttribute("userid", uName);
	response.sendRedirect("input.html"); 

%>


