import React from "react";

export const Header = ({title, subtitle, optionLength}) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{subtitle}</p>
			<p>
				{optionLength > 0
					? `Here are your options ${optionLength}`
					: `No options`}
			</p>
		</div>
	);
};
