import * as signalR from "@microsoft/signalr";

var connection = new signalR.HubConnectionBuilder().withUrl("/v1/hubs/update").build();

connection.on("test_receive" ,(x,y) => {

})