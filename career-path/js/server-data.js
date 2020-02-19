
// function getData() {
// 	$.ajax({
// 		type: 'POST',
// 		url: 'http://localhost:7474/db/data/cypher',
// 		contentType: 'application/json',
// 		headers: {'authorization': 'Basic bmVvNGo6cGFzc3dvcmQ='},
// 		data: {
// 			"query": "MATCH p=(e:Education {name: 'Class X'})-[*]->(r:Role) WHERE NOT (r)-->() RETURN EXTRACT(x IN NODES(p)[..-1] | x.name), nodes(p), relationships(p)"
// 		  },
// 		success: (response) => {},
// 		error: (error) => {
// 		  console.log("Data failed");
// 		},
// 		complete: (resp) => {
// 			parseServerData();
// 		},
// 	  });
// }

function getData() {
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/career-path',
		contentType: 'application/json',
		data: {
			"query": "MATCH p=(e:Education {name: 'Class X'})-[*]->(r:Role) WHERE NOT (r)-->() RETURN EXTRACT(x IN NODES(p)[..-1] | x.name), nodes(p), relationships(p)"
		  },
		success: (response) => {},
		error: (error) => {
		  console.log("Data failed");
		},
		complete: (resp) => {
            console.log(resp);
			parseServerData(resp);
		},
	  });
}

function parseServerData(rawdata) {
    let jsondata = JSON.parse(rawdata);
    let nodeIds = [];
    let nodeList = [];
    let relationList = [];
    let data = jsondata.data;
    const nodePrefix = "http://localhost:7474/db/data/node/";
    const relPrefix = "http://localhost:7474/db/data/relationship/";
    data.forEach(function(element) {
        let nodes = element[1];
        nodes.forEach(function(node) {
            if (_.indexOf(nodeIds, node.metadata.id) == -1) {
                nodeList.push({"id": node.metadata.id, "name": node.data.name});
                nodeIds.push(node.metadata.id);
            }
        });
        let relations = element[2];
        relations.forEach(function(rel) {
            let relId = _.replace(rel.self, relPrefix, '');
            let startId = _.replace(rel.start, nodePrefix, '');
            let endId = _.replace(rel.end, nodePrefix, '');
            relationList.push({"relId": relId, "startId": startId, "endId": endId, "noOfPeople": rel.data.count});
        });
    });
    let output = {"nodes": nodeList, "relations": relationList};
}


function parseData(){
	var convertedData = {nodes: [], links: []};
	var careerPath = {"nodes":[{"name":"Class 10","id":"956236"},{"name":"Class 12","id":"956243"},{"name":"ME","id":"956238"},{"name":"Software Engineer","id":"956237"},{"name":"Senior SE","id":"956245"},{"name":"TM","id":"956239"},{"name":"TCE","id":"956244"},{"name":"CSE","id":"956226"}],"relations":[{"relId":"812180","endId":"956243","startId":"956236","noOfPeople":"9"},{"relId":"812274","endId":"956238","startId":"956243","noOfPeople":"1"},{"relId":"812176","endId":"956237","startId":"956238","noOfPeople":"1"},{"relId":"812192","endId":"956245","startId":"956237","noOfPeople":"4"},{"relId":"812275","endId":"956239","startId":"956245","noOfPeople":"1"},{"relId":"812272","endId":"956244","startId":"956243","noOfPeople":"1"},{"relId":"812172","endId":"956237","startId":"956244","noOfPeople":"1"},{"relId":"812271","endId":"956226","startId":"956243","noOfPeople":"4"},{"relId":"812182","endId":"956237","startId":"956226","noOfPeople":"3"}]}
	
	var nodesLen = careerPath.nodes.length;
	for (i = 0; i < nodesLen; i++){
		var node = careerPath.nodes[i];
		convertedData.nodes.push({"name" : node.name});
		nodeMap[node.id] = {index: i, name: node.name};
	}

	var relationesLen = careerPath.relations.length;
	for (j = 0; j < relationesLen; j++){
		var relation = careerPath.relations[j];
		var link = {};
		link.source = getNodeIndex(relation.startId);
		link.target = getNodeIndex(relation.endId);
		link.value = relation.noOfPeople;

		convertedData.links.push(link);
	}
	
	return convertedData;
}


function getNodeIndex(nodeId){
	return nodeMap[nodeId].index;
}
