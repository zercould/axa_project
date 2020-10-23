'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000/api/v1';



describe('Error bad url: ',()=>{

	it('should receive an error', (done) => {
		chai.request(url)
			.post('/clients')
			.send({names: "Britney"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(404);
				done();
			});
	});

});

describe('get all client: ',()=>{

	it('should get all client', (done) => {
		chai.request(url)
			.post('/client')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('get all client by name: ',()=>{

	it('should get all client', (done) => {
		chai.request(url)
            .post('/client')
            .send({names: "Britney"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});
describe('get all client by id: ',()=>{

	it('should get all client by id', (done) => {
		chai.request(url)
            .post('/client')
            .send({id: "a0ece5db-cd14-4f21-812f-966633e7be86"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('get all client by email: ',()=>{

	it('should get all client by email', (done) => {
		chai.request(url)
            .post('/client')
            .send({email: "inesblankenship@quotezart.com"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('get all client by role: ',()=>{

	it('should get all client by role', (done) => {
		chai.request(url)
            .post('/client')
            .send({role: "admin"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

    
describe('Error bad role: ',()=>{

	it('should receive an error', (done) => {
		chai.request(url)
            .post('/policies')
            .send({userId: "82a2cc23-243a-409c-89b1-a4956e4ab201",clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(500);
				done();
			});
	});

});

describe('get all policies by user: ',()=>{

	it('should get all policies by user', (done) => {
		chai.request(url)
            .post('/policies')
            .send({userId: "a0ece5db-cd14-4f21-812f-966633e7be86",clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});
describe('get all policies by policity number: ',()=>{

	it('should get all policies by policity number', (done) => {
		chai.request(url)
            .post('/policies')
            .send({userId: "a0ece5db-cd14-4f21-812f-966633e7be86",id: "0df3bcef-7a14-4dd7-a42d-fa209d0d5804"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('Error bad role: ',()=>{

	it('should receive an error', (done) => {
		chai.request(url)
            .post('/policies')
            .send({userId: "82a2cc23-243a-409c-89b1-a4956e4ab201",id: "0df3bcef-7a14-4dd7-a42d-fa209d0d5804"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(500);
				done();
			});
	});

});