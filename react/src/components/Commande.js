import React, {Component} from 'react';
import { Col, Container, Row, Form, Button, Modal } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { strapi_host_url } from '../strapi';
import ArticleCommande from './ArticleCommande';

class Commande extends Component{
    constructor(props) {
        super(props)
        this.state={
            name: "",
            familyName: "",
            email: "",
            address: "",
            modalIsOpen: false,
            CommandPaid: false,
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    openModal = () => this.setState({ modalIsOpen: true });
    
    closeModal = () => {
        this.props.ClearPanier();
        this.setState({ 
            modalIsOpen: false,
            CommandPaid: true,
        });
    }

    updateTimeBought = async(article) =>{
        const url = strapi_host_url + "/api/articles/" + article.id;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data:{
                    numb_time_bought: article.attributes.numb_time_bought + 1,
                }
            }),
        });

        if (!response.ok) {
            console.log("error");
            return;
        }

        this.openModal();
    }
    
    handleSubmit = async () => {
        const response = await fetch(strapi_host_url + "/api/commandes", {
            method: "POST", 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data:{
                    clientName: this.state.name,
                    clientFamilyName: this.state.familyName,
                    clientEmail: this.state.email,
                    clientAddress: this.state.address,
                    articles: this.props.panier.map(article=>article.id)
                }
            }), 
        });
      
        if (!response.ok) {
            console.log("error");
            return;
        }

        this.props.panier.forEach((article) =>{
            this.updateTimeBought(article);
        });
    }

    render(){
        if(this.state.CommandPaid){
            return <Navigate to='/'/>;
        }

        if(this.props.panier.length !== 0){
           return(
                <Container fluid className="commande-content-container">
                    <Row>
                        <Col className="commande-form-container" xs={12} md={8}>
                            <h2 className="commande-title">Formulaire de la commande :</h2>
                            <Row className="justify-content-center">
                                <Col xs={12} lg={8}>
                                    <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Commande envoyée !</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Votre commande a bien été envoyée, merci de votre achat, en espérant vous revoir bientôt !</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.closeModal}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <Form>
                                        <Form.Group className="form-input" controlId="name">
                                            <Form.Label>Prénom (obligatoire)</Form.Label>
                                            <Form.Control type="text" name="name" required={true} placeholder="Entrez votre prénom" onChange={(e) => this.handleChange(e)} />
                                        </Form.Group>
                                        <Form.Group className="form-input" controlId="familyName">
                                            <Form.Label>Nom (obligatoire)</Form.Label>
                                            <Form.Control type="text" name="familyName" required={true} placeholder="Entrez votre nom de famille" onChange={(e) => this.handleChange(e)} />
                                        </Form.Group>
                                        <Form.Group className="form-input" controlId="email">
                                            <Form.Label>Email (obligatoire)</Form.Label>
                                            <Form.Control type="email" name="email" required={true} placeholder="Entrez votre email" onChange={(e) => this.handleChange(e)} />
                                        </Form.Group>
                                        <Form.Group className="form-input" controlId="address">
                                            <Form.Label>Adresse </Form.Label>
                                            <Form.Control type="text" name="address" placeholder="Entrez votre adresse"  onChange={(e) => this.handleChange(e)} />
                                        </Form.Group>
                                        <Button onClick={() => this.handleSubmit(this.state)} variant="success">{"Confirmer la commande des articles du panier (prix total : " + this.props.total_prix_articles_panier + "€)"}</Button>
                                    </Form>  
                                </Col>
                            </Row>
                        </Col>
                        <Col className="commande-articles-container" xs={12} md={4}>
                            <h2 className="commande-title">Articles du panier :</h2>
                            {
                                this.props.panier.map((article,i) =>{
                                    return(
                                        <div>
                                            <ArticleCommande key={i} article={article} articleIndex={i} RemFromPanier={this.props.RemFromPanier}/>
                                        </div>
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container> 
            );
        }
        else{
            return(
                <h2 className="empty-commande-text">Vous n'avez pas d'article dans votre panier, veuillez revenir quand ce sera le cas !</h2>
            );
        }
    }
}


export default Commande