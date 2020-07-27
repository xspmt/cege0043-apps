function getUserParticipation(){

const svg     = d3.select("#UserPar"),
      margin  = {top: 20, right: 20, bottom: 30, left: 50},
      width   = +svg.attr("width")  - margin.left - margin.right,
      height  = +svg.attr("height") - margin.top  - margin.bottom,
      x       = d3.scaleBand().rangeRound([0, width]).padding(0.2),
      y       = d3.scaleLinear().rangeRound([height, 0]),
      g       = svg.append("g")
                   .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json("https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +"/getUserParticipation/"+ httpsPortNumberAPI).then(data => {
  data = data[0].array_to_json;
  console.log(data);
  x.domain(data.map(d => d.day));
y.domain([0, d3.max(data, d => d.questions_answered)]);


  g.append("g")
      .attr("class", "axis axis-x")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));


  g.append("g")
      .attr("class", "axis axis-y")
      .call(d3.axisLeft(y).ticks(10).tickSize(8));

  //two seperate bars for two parameter
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day))
      .attr("y", d => y(d.questions_answered))
      .attr("width", x.bandwidth()/2)
      .attr("height", d => height - y(d.questions_answered))
      .attr("fill", "#36b9cc");

  g.selectAll(".rect")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day) + x.bandwidth()/2)
      .attr("y", d => y(d.questions_correct))
      .attr("width", x.bandwidth()/2)
      .attr("height", d => height - y(d.questions_correct))
      .attr("fill", "#1cc88a");
      

})
.catch(err => {
  svg.append("text")         
        .attr("y", 20)
        .attr("text-anchor", "left")  
        .style("font-size", "20px") 
        .style("font-weight", "bold")  
        .text(`Couldn't open the data file: "${err}".`);
});

//add legend
  g.append('g')
    .attr('transform', "translate(570, 10)")
    .append('rect')
    .attr('width', '15px')
    .attr('height', '15px')
    .attr('fill', '#36b9cc');

  g.append('g')
    .attr('transform', "translate(570, 40)")
    .append('rect')
    .attr('width', '15px')
    .attr('height', '15px')
    .attr('fill', '#1cc88a');

  g.append("text")
    .attr("y", 20)
    .attr("x", 600)
    .style("text-anchor" , "right")
    .style("font-size", "12px")
    .text("Answered");

  g.append("text")
    .attr("y", 50)
    .attr("x", 600)
    .style("text-anchor" , "right")
    .style("font-size", "12px")
    .text("Correct");

//add y axis text
  g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 )
      .attr("x",0 )
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text("Number");

//add title
  g.append("text")
      .attr("x", (width/2))
      .attr("y", 0 -3)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text("Users' Daily Participation Rates");


};


function getAllParticipation(){
  const svg     = d3.select("#AllPar"),
      margin  = {top: 20, right: 20, bottom: 30, left: 50},
      width   = +svg.attr("width")  - margin.left - margin.right,
      height  = +svg.attr("height") - margin.top  - margin.bottom,
      x       = d3.scaleBand().rangeRound([0, width]).padding(0.2),
      y       = d3.scaleLinear().rangeRound([height, 0]),
      g       = svg.append("g")
                   .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json("https://developer.cege.ucl.ac.uk:"+ httpsPortNumberAPI +"/getallParticipation").then(data => {
  data = data[0].array_to_json;
  console.log(data);
  x.domain(data.map(d => d.day));
y.domain([0, d3.max(data, d => d.questions_answered)]);


 g.append("g")
      .attr("class", "axis axis-x")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));


  g.append("g")
      .attr("class", "axis axis-y")
      .call(d3.axisLeft(y).ticks(10).tickSize(8));

  //two seperate bars for two parameter
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day))
      .attr("y", d => y(d.questions_answered))
      .attr("width", x.bandwidth()/2)
      .attr("height", d => height - y(d.questions_answered))
      .attr("fill", "#36b9cc");

  g.selectAll(".rect")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.day) + x.bandwidth()/2)
      .attr("y", d => y(d.questions_correct))
      .attr("width", x.bandwidth()/2)
      .attr("height", d => height - y(d.questions_correct))
      .attr("fill", '#1cc88a');

})
.catch(err => {
  svg.append("text")         
        .attr("y", 20)
        .attr("text-anchor", "left")  
        .style("font-size", "20px") 
        .style("font-weight", "bold")  
        .text(`Couldn't open the data file: "${err}".`);
});

//add legend
  g.append('g')
    .attr('transform', "translate(570, 10)")
    .append('rect')
    .attr('width', '15px')
    .attr('height', '15px')
    .attr('fill', "#36b9cc");

  g.append('g')
    .attr('transform', "translate(570, 40)")
    .append('rect')
    .attr('width', '15px')
    .attr('height', '15px')
    .attr('fill', '#1cc88a');

  g.append("text")
    .attr("y", 20)
    .attr("x", 600)
    .style("text-anchor" , "right")
    .style("font-size", "12px")
    .text("Answered");

  g.append("text")
    .attr("y", 50)
    .attr("x", 600)
    .style("text-anchor" , "right")
    .style("font-size", "12px")
    .text("Correct");

//add y axis text
  g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 )
      .attr("x",0 )
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text("Number");

//add title
  g.append("text")
      .attr("x", (width/2))
      .attr("y", 0 -3)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text("All Users Daily Participation Rates");


}