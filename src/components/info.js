import styled from 'styled-components'

//root
const Root = styled.div``

const Info = ({ info }) => {
	return (
		<Root>
			<h2>{info.title}</h2>
			<p>{info.description}</p>
			<ul>
				<li>
					<a href={`${info.termsOfService}`} target='blank'>
						Term of services
					</a>
				</li>
				<li>
					<a href={`mailto:${info.contact.email}`}>Contact Us</a>
				</li>
				<li>
					<a href={`${info.license.url}`} target='blank'>
						{info.license.name}
					</a>
				</li>
				<li>
					<a href='https://mssint.com' target='blank'>
						Learn more about MSS International
					</a>
				</li>
			</ul>
		</Root>
	)
}

export default Info
