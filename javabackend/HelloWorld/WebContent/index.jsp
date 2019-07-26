<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="json" uri="http://www.atg.com/taglibs/json" %>
    

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<json:object>
  <json:property name="outer" value="foo"/>
    
  <json:object name="inner">
    <json:property name="innerProp1" value="val1"/>
    <json:property name="innerProp2" value="val2"/>
    
    <json:object name="inner2">
      <json:property name="inner2Prop1" value="in2p1"/>
      <json:property name="inner2Prop2" value="in2p2"/>
    </json:object>  
      
  </json:object> 
</json:object>
</body>
</html>