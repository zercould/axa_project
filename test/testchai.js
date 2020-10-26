'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000/api/v1';

const admintToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOlt7ImlkIjoiZThmZDE1OWItNTdjNC00ZDM2LTliZDctYTU5Y2ExMzA1N2JiIiwibmFtZSI6Ik1hbm5pbmciLCJlbWFpbCI6Im1hbm5pbmdibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwicm9sZSI6ImFkbWluIn1dLCJpYXQiOjE2MDM3MTI0NDR9.awtXuDkYz-mu1WuEfi_5RJBIR3qNee16Q-JE_RV7x3U";
const userToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOlt7ImlkIjoiYTNiOGQ0MjUtMmI2MC00YWQ3LWJlY2MtYmVkZjJlZjg2MGJkIiwibmFtZSI6IkJhcm5ldHQiLCJlbWFpbCI6ImJhcm5ldHRibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwicm9sZSI6InVzZXIifV0sImlhdCI6MTYwMzcxMzE4NH0.4w5pWahMzr45C7F1a6XxeMa1VbAW5-0UB_JfbUatR2M";

describe('Error on GetToken: ',()=>{
	it('should receive an error', (done) => {
		chai.request(url)
			.post('/getToken')
			.send({email: "Britney"})
			.end( function(err,res){
				console.log(res.body);
				expect(res).to.have.status(500);
				done();
			});
	});

});

describe('get token: ',()=>{
	it('should get error on get token', (done) => {
		chai.request(url)
			.post('/getToken')
			.send({email: "manningblankenship@quotezart.com"})
			.end( function(err,res){
				console.log(res.body);
				tokenAdmin = res.body.accessToken;
				expect(res).to.have.status(200);
				done();
			});
	});

});

//Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"

describe('1 Get user data filtered by user id: ',()=>{
	it('Get user data admin role', (done) => {
		chai.request(url)
		.post('/objective1')
		.set({ Authorization:  admintToken})
		.send({id: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"})
		.end( function(err,res){
				console.log(res.body);
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('1 Get user data filtered by user id: ',()=>{
	it('Get user data user role', (done) => {
		chai.request(url)
		.post('/objective1')
		.set({ Authorization: userToken})
		.send({id: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"})
		.end( function(err,res){
				console.log(res.body);
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('1 Get user data filtered by user id: ',()=>{
	it('get error bad param', (done) => {
		chai.request(url)
		.post('/objective1')
		.set({ Authorization: userToken})
		.send({ids: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"})
		.end( function(err,res){
				console.log(res.body);
				expect(res).to.have.status(500);
				done();
			});
	});
});

//Get user data filtered by user name -> Can be accessed by users with role "users" and "admin"

describe('2 Get user data filtered by user name: ',()=>{
	it('Get user data filtered by user name admin role', (done) => {
		chai.request(url)
            .post('/objective2')
			.send({name: "Manning"})
			.set({ Authorization: admintToken })
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('2 Get user data filtered by user name: ',()=>{
	it('Get user data filtered by user name user role', (done) => {
		chai.request(url)
            .post('/objective2')
			.send({name: "Manning"})
			.set({ Authorization: userToken })
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});
});

describe('2 Get user data filtered by user name: ',()=>{
	it('Error bad param', (done) => {
		chai.request(url)
            .post('/objective2')
			.send({names: "Manning"})
			.set({ Authorization: userToken })
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(500);
				done();
			});
	});

});


//Get the list of policies linked to a user name -> Can be accessed by users with role "admin"

describe('3 Get the list of policies linked to a user name: ',()=>{
	it('Get the list of policies linked to a user name admin role', (done) => {
		chai.request(url)
            .post('/objective3')
			.send({name: "Manning"})
			.set({ Authorization: admintToken })
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('3 Get the list of policies linked to a user name: ',()=>{
	it('Error user role', (done) => {
		chai.request(url)
            .post('/objective3')
			.send({name: "Manning"})
			.set({ Authorization: userToken })
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(500);
				done();
			});
	});

});
describe('3 Get the list of policies linked to a user name: ',()=>{
	it('Error Bad Param', (done) => {
		chai.request(url)
            .post('/objective3')
			.send({names: "Manning"})
			.set({ Authorization: userToken })
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(500);
				done();
			});
	});

});


//Get the user linked to a policy number -> Can be accessed by users with role "admin"

describe('4 Get the user linked to a policy number ',()=>{

	it('Get the user linked to a policy number admin role', (done) => {
		chai.request(url)
			.post('/objective4')
			.set({ Authorization: admintToken })
            .send({police_number: "64cceef9-3a01-49ae-a23b-3761b604800b"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('4 Get the user linked to a policy number ',()=>{

	it('Get the user linked to a policy number user role', (done) => {
		chai.request(url)
			.post('/objective4')
			.set({ Authorization: userToken })
			.send({police_number: "64cceef9-3a01-49ae-a23b-3761b604800b"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(500);
				done();
			});
	});

});

describe('4 Get the user linked to a policy number ',()=>{

	it('Error Bad Params', (done) => {
		chai.request(url)
			.post('/objective4')
			.set({ Authorization: userToken })
			.send({police_numbers: "64cceef9-3a01-49ae-a23b-3761b604800b"})
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(500);
				done();
			});
	});

});