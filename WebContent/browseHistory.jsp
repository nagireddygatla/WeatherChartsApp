<%@page import="java.awt.geom.CubicCurve2D"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"  pageEncoding="ISO-8859-1" import="java.util.*"%>
<%@ page import="java.sql.*, javax.sql.*, java.io.*, javax.naming.*" %>
<center>
<table border="1">
<th>Browse History</th>

<%
Connection con = null;
String url = null;
String uName = null;
String dbName = "parking_lot";
String uid = "root";
String pWord = "amrutha";
uName = (String)session.getAttribute("userid");

try{
	
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	con= DriverManager.getConnection("jdbc:mysql://localhost:3306/"+dbName,uid,pWord);
	Statement stmt2 = con.createStatement();
	Statement st=con.createStatement();
	ResultSet rs = st.executeQuery("select URL from browseHist where uName='"+uName+"'");
	while (rs.next()) {
		String URL = rs.getString("URL");
		System.out.println(URL);
		%>
		<tr><td><a href="<%=URL%>"><%=URL%></a></td></tr>
		<% 
	}
}
catch(Exception e)
{
	e.printStackTrace();
}

%>
</table>
</center>