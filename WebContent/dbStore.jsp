<%@page import="java.awt.geom.CubicCurve2D"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"  pageEncoding="ISO-8859-1" import="java.util.*"%>
<%@ page import="java.sql.*, javax.sql.*, java.io.*, javax.naming.*" %>
<%
Connection con = null;
String url = null;
String uName = null;
String dbName = "parking_lot";
String uid = "root";
String pWord = "amrutha";
uName = (String)session.getAttribute("userid");

if(request.getParameter("url")!=""){
	url = request.getParameter("url");
}
System.out.println(url);
try{
		Class.forName("com.mysql.jdbc.Driver").newInstance();
	con= DriverManager.getConnection("jdbc:mysql://localhost:3306/"+dbName,uid,pWord);
	Statement stmt2 = con.createStatement();
	int result = stmt2.executeUpdate("Insert into browseHist "+ "values('"+uName+"','"+url+"')");
	
}
catch(Exception e)
{
	e.printStackTrace();

}

%>
