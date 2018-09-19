import React from 'react'
import { Link } from 'gatsby'
import Heading from '../../../packages/heading'
import styled from 'react-emotion'

const SectionNav = styled('nav')({
  gridArea: 'side',
  marginTop: '1rem'
})

const SideNav = ({ data }) => {
  return (
    <React.Fragment>
      <SectionNav>
        <ul>
          {data.map((section, s) => (
            <li key={s}>
              <Heading size="small" level={2}>{section.title}</Heading>
              {section.items && (
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}><Link to={item.to}>{item.title}</Link></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </SectionNav>
    </React.Fragment>
  )
}

export default SideNav
