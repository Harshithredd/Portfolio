const { render, screen } = require("@testing-library/react");
const { default: Footer } = require("../Footer");



describe('Footer Component',()=>{
    it('Render Footer Component',()=>{
        render(<Footer/>);
        const aboutTitle = screen.getByText('2023 © All Rights Reserved.')
        expect(aboutTitle).toBeInTheDocument()
    })
})