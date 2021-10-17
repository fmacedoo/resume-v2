import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import * as React from 'react';

export default function IndexPage({ data: { resume } }) {
    return (
		<main>
			<img src={resume.avatar.file.url} alt={resume.avatar.description} />
			<h1>{resume.title}</h1>
			<h2>{resume.subtitle}</h2>
			<p>{resume.description.description}</p>
			<h3>Contacts</h3>
			<ul>
				{resume.contacts.map(contact => (
					<li>{contact.type} - {contact.value}</li>
				))}
			</ul>
			<h3>Experience</h3>
			{resume.experiences.map(experience => (
				<section>
					<h4>{experience.company}</h4>
					{renderRichText(experience.description)}
				</section>
			))}
			<h3>Education</h3>
			{resume.education.map(education => (
				<section>
					<h4>{education.school}</h4>
					{renderRichText(education.description)}
				</section>
			))}
			<h3>Skills</h3>
			<table>
			{resume.skills.map(skill => (
				<tr>
					<td>{skill.name}</td>
					<td>{skill.rate}/5</td>
				</tr>
			))}
			</table>
		</main>
	);
}

export const query = graphql`
    query CVQuery {
        resume: contentfulResume(id: { eq: "47f5752a-7365-5061-b38d-b4f13264a1b5" }) {
            avatar {
                file {
                    url
                }
                description
                title
            }
            subtitle
            title
            contacts {
                id
                type
                value
            }
            description {
                description
            }
            experiences {
                id
                startAt
                endAt
                company
                description {
                    raw
                }
            }
            education {
                id
                degree
                endAt
                school
                startAt
                description {
                    raw
                }
            }
            skills {
                id
                name
                rate
            }
        }
    }
`;
