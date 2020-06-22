---
title: What is HTTP?
date: 2020-06-16
featuredImage: ./featured-image.jpg
author: Ross Morran
---

HTTP stands for Hypertext Transfer Protocol. It’s a set of rules which govern communication over the Internet. By communication we mean in this context the exchange of data. By providing this set of rules, HTTP makes it possible for different machines located sometimes many thousands of miles away from each other to communicate in a uniform way. It can be useful to think of it as a shared language. HTTP is based on a client-server model in which the client submits a **_request_** and the server returns a **_response_**. In the majority of cases the client is a web browser, though this is not always the case.

## The Request

A HTTP request is made up of a **_verb_** which indicates the type of action which the client wants to make, and a **_noun_** which identifies the location of the resource on the server to which the action should be applied (the noun is a Uniform Resource Locator, or URL). In the case of a GET request, the URL supplied by the client can be supplemented by a query string which helps to specify the data which is being requested by providing parameters.

The most common HTTP verbs are:

**GET** - request data from the server (read-only request)<br>
**POST** - update the server with a new resource (i.e. new data) provided by the client<br>
**PUT** - modify an existing resource on the server<br>
**DELETE** - delete an existing resource on the server<br>

The verbs are also sometimes referred to as HTTP request methods. A full list can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

### An Example

This is an example of a HTTP GET request with a combination of verb and noun (including a query string):

`GET https://www.google.com/search?q=arsenal`

The request equates to a Google search.

`GET` is the verb. It indicates the type action that we want to apply to the resource. In this case, we want to fetch data from the server.

`https://www.google.com/search` is the URL. It specifies the domain where the resource is located. It also identifies HTTP as the protocol which we’re using to make the request.

`?q=arsenal` is a query string which contains a single parameter (‘arsenal’). It specifies the kind of data that we want to receive. Not every GET request will include a query string, but in the case of a Google search request like this at least one parameter is required.

The Google web server’s response to this request should be a list of search results relating to Arsenal.

### A few more things about the request

In addition to the headline verb and noun combination, a HTTP request contains pieces of extra information called **_headers_**. Headers give further details about the request and the type of response which is desired. There are a large number of headers available, and the client can choose those which are relevant to its particular request. Examples of request headers include:

**Accept: text/html**<br>
**Accept - Language: fr**<br>
**Origin: https://developer.mozilla.org**<br>

Taken together, these headers inform the server that the client is able to understand data of the type text/html, that it is able to understand the French language, and that the client’s request originated from https://developer.mozilla.org. The server can use this information when it puts together its response. These are just 3 examples among many. A list of HTTP headers can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers). It’s worth mentioning that a request can also include a **_body_** which contains data, known as the payload (this is often used in POST requests, when the client wants to add a new resource to the server).

A browser is a Graphical User Interface (GUI) for making HTTP requests. For example, when you type the name of a domain (e.g. BBC or Facebook) into the address bar and hit enter, the browser will generate and send a HTTP GET request to the web server (extra bits like headers will be added by the browser in the background). Assuming the request is successful, the web server will respond by sending data to the client in the form of the web page which you requested.

## The Response

A HTTP response includes a **_response status code_** which lets the client know whether or not the request has been successful (200, for instance, indicates a successful request), and gives further information if an error has occurred (404, which means resource not found, is the most (in)famous of these error codes). A list of codes can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

The response also includes **_headers_** which supply additional information to the client (they work in the same way as request headers), and of course it often includes data (particularly if responding to a successful GET request). It should be noted that the response to a HTTP request is in practical terms determined by the actual implementation of the web server. This means that what the server actually does with a client’s GET, POST, PUT, or DELETE request is entirely up to how the code running on the server has been set up.

## One more detail

HTTP is a **_stateless_** protocol. This means that the server will not store any information about the client, and therefore has nothing with which to identify it if the latter should make a subsequent request. As a consequence of this, each time the client makes a request it will have to include a complete set of information to enable the server to handle the request. It cannot expect the server to remember any data which was previously submitted. It’s important to highlight though that although HTTP itself is stateless, session information can still be stored on clients through the use of cookies.

## What to look at next

Finally, if you’d like to practise creating your own HTTP requests, I’d recommend downloading and using [Postman](https://www.postman.com). It’s a great tool that can also help a lot when you’re developing software which makes use of HTTP. Requests and responses in the browser can be tracked in the browser’s Developer Tools; in Google Chrome, Firefox and Edge, you can do this by clicking on the Network tab when the Tools are open. Have a look at your browser’s guide to using the Tools to learn more.

Happy coding!
