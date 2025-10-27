import React from 'react';
import { Wrapper, Count,ContentDiv, ContentP } from './OvelCard.styles';
function OvelCard({ bgImage, title, counts, content }) {
    return (
        <Wrapper  $bgImage={bgImage}>
            <ContentDiv>
                <div className="text-white">
                    <Count >{counts}+</Count>
                    <div className="text-sm font-medium uppercase tracking-wider">{title} </div>
                </div>
                <div className="text-white">
                    <ContentP className="text-xs leading-relaxed opacity-90 pt-[60px] max-w[115px]">{content}</ContentP>
                </div>
            </ContentDiv>
        </Wrapper>
    );
}

export default OvelCard;