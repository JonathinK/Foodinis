import React,{useState} from "react";
import { PageHeader } from "../components/header";
import { PageFooter } from "../components/footer";
import { PageWrapper } from "../styles/pageWrapper.styled";
import ProductModal from "../components/storefront/productModal";
import Cart from "../components/storefront/cart";
import useStore from "../context/StoreContext";
import Toast from "../components/storefront/toast";

//___

export const PageLayout = ({ element, ...props }) => {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(null);

  // Cart State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useStore();

   // Toast State
   const [toastMessage, setToastMessage] = useState('');
   const [showToast, setShowToast] = useState(false);

  // Function to open modal with a specific product
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
    document.body.style.top = `-${scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    document.body.style.position = '';
    document.body.style.top = '';
    if (scrollPosition !== null) {
      window.scrollTo(0, scrollPosition);
    }
  };

  // Function to toggle the cart and disable/enable scrolling
  const handleToggleCart = () => {
    if (!isCartOpen) {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      document.body.style.top = `-${scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      if (scrollPosition !== null) {
        window.scrollTo(0, scrollPosition);
      }
    }
    setIsCartOpen(!isCartOpen);
  };

  // Show toast notification when product is added
  const handleShowToast = (title) => {
    setToastMessage(`${title} has been added to your cart!`);
    setShowToast(true);
  };

  return(
    <PageWrapper className="page-wrapper">
      <PageHeader
        onCartIconClick={handleToggleCart}
        cartItemCount={cart.length}
      />
      {React.cloneElement(element, { handleOpenModal })}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        onAddToCart={(title) => {
          handleCloseModal();
          handleShowToast(title);
        }}
      />
      <Cart 
        isOpen={isCartOpen}
        onClose={handleToggleCart}
      />
      <Toast message={toastMessage} show={showToast} onHide={() => setShowToast(false)}/>
      <PageFooter/>
    </PageWrapper>
  )
}