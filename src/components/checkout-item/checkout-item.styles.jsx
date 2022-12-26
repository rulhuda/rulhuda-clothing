import styled from "styled-components";

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
export const QuantityItem = styled.span`
  display: flex;
`;

export const ArrowButton = styled.span`
  cursor: pointer;
`;

export const ValueItem = styled.span`
  margin: 0 10px;
`;

export const NameItem = styled.span``;

export const PriceItem = styled.span``;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  ${NameItem},
  ${QuantityItem},
  ${PriceItem} {
    width: 23%;
  }
`;
