import React from 'react'
interface Props {
    subTitle?: string;
    alignment?: string;
}
const SubTitle: React.FC<Props> = ({ subTitle = "Default ", alignment = "text-center" }) => {
    return (
        <div className={`${alignment} mb-3 md:mb-5`}>
            <div className="subtile-title">{subTitle}</div>

        </div>
    );
};

export default SubTitle
