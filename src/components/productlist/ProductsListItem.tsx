import { ProductsListItemContainer } from "./ProductsListItemStyle"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EastIcon from '@mui/icons-material/East';

interface ProductsListItemProps {
  text: string,
  color: string
}

export const ProductsListItem = (props: ProductsListItemProps) => {
  return (
    <ProductsListItemContainer className={props.color}>
      <CheckBoxOutlineBlankIcon className="productslist-check-icon"/>
      <span>{props.text}</span>
      <EastIcon className="productslist-arrow-icon"/>
    </ProductsListItemContainer>
  )
}