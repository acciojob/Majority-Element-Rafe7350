//your code here
describe('Test Suite', () => {
    it('should make a successful HTTP request', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'delectus aut autem');
      });
    });
  });
  