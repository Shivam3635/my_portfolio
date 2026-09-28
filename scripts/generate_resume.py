import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    Table,
    TableStyle,
    ListFlowable,
    ListItem,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

def build_pdf(filename="public/resume.pdf"):
    # Set tight margins to ensure perfect 1-page fit
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,   # 0.5 inch
        rightMargin=36,
        topMargin=32,
        bottomMargin=32,
    )

    styles = getSampleStyleSheet()

    # Custom styles
    header_name = ParagraphStyle(
        "HeaderName",
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=21,
        alignment=1, # Center
        textColor=colors.black,
    )

    header_sub = ParagraphStyle(
        "HeaderSub",
        fontName="Helvetica",
        fontSize=10,
        leading=13,
        alignment=1, # Center
        textColor=colors.HexColor("#222222"),
    )

    header_contact = ParagraphStyle(
        "HeaderContact",
        fontName="Helvetica",
        fontSize=8.5,
        leading=11,
        alignment=1, # Center
        textColor=colors.HexColor("#222222"),
    )

    sec_heading = ParagraphStyle(
        "SecHeading",
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=12,
        textColor=colors.black,
        spaceAfter=1,
    )

    body_text = ParagraphStyle(
        "BodyTextCustom",
        fontName="Helvetica",
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor("#1a1a1a"),
    )

    body_bold = ParagraphStyle(
        "BodyBold",
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=11,
        textColor=colors.black,
    )

    bullet_style = ParagraphStyle(
        "BulletText",
        fontName="Helvetica",
        fontSize=7.8,
        leading=9.8,
        textColor=colors.HexColor("#1a1a1a"),
    )

    skills_label = ParagraphStyle(
        "SkillsLabel",
        fontName="Helvetica-Bold",
        fontSize=8,
        leading=10.5,
        textColor=colors.black,
    )

    skills_val = ParagraphStyle(
        "SkillsVal",
        fontName="Helvetica",
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor("#1a1a1a"),
    )

    story = []

    # 1. Header
    story.append(Paragraph("SHIVAM SINGH", header_name))
    story.append(Paragraph("Student at University of Allahabad", header_sub))
    story.append(Spacer(1, 2))
    
    contact_line = (
        '7880236266 &nbsp;&bull;&nbsp; '
        '<a href="mailto:singhshivamop36@gmail.com" color="#000000"><u>singhshivamop36@gmail.com</u></a> &nbsp;&bull;&nbsp; '
        '<a href="https://www.linkedin.com/in/shivam-singh-5147a1285" color="#000000"><u>LinkedIn</u></a> &nbsp;&bull;&nbsp; '
        '<a href="https://github.com/Shivam3635" color="#000000"><u>GitHub</u></a> &nbsp;&bull;&nbsp; '
        'Prayagraj, India'
    )
    story.append(Paragraph(contact_line, header_contact))
    story.append(Spacer(1, 4))

    def add_section_header(title):
        story.append(Paragraph(title, sec_heading))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=3))

    # 2. Professional Summary
    add_section_header("PROFESSIONAL SUMMARY")
    summary_p = (
        "BCA student at the University of Allahabad with hands-on experience creating and deploying web applications through AI-assisted development "
        "workflows. Familiar with Python, C, Java, JavaScript, HTML, CSS, Git and GitHub, with exposure to Firebase, MySQL and Flask. Participated "
        "in hackathons including Smart India Hackathon 2026 and Code for Community Hackathon 2026, with experience in research, presentation, "
        "project ideation and AI-assisted application development. Seeking a Web Developer internship to strengthen practical software development "
        "skills and contribute to real-world projects."
    )
    story.append(Paragraph(summary_p, body_text))
    story.append(Spacer(1, 4))

    # 3. Education
    add_section_header("EDUCATION")
    edu_data = [
        [
            Paragraph("<b>University of Allahabad</b> | Prayagraj<br/><i>Bachelor's of Computer Application (BCA)</i>", body_text),
            Paragraph("<para align='right'>2024 - 2027<br/>CGPA : 7.5</para>", body_text),
        ],
        [
            Paragraph("<b>Govt. Sr. Sec. School, Shahjahanpur &mdash; RBSE</b><br/>Class XII | 2023 | 87.4% &mdash; <b>School Topper</b><br/>Class X | 2021 | 95.83%", body_text),
            Paragraph("", body_text),
        ]
    ]
    t_edu = Table(edu_data, colWidths=[400, 140])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 3))

    # 4. Experience & Leadership
    add_section_header("EXPERIENCE &amp; LEADERSHIP")
    exp_header = [
        [
            Paragraph("<b>Event Management Volunteer</b> &mdash; <i>Quantum Quirks Coding Club</i><br/>Centre of Computer Education and Training, University of Allahabad", body_text),
            Paragraph("<para align='right'><b>March 2026&ndash;Present</b></para>", body_text)
        ]
    ]
    t_exp = Table(exp_header, colWidths=[400, 140])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_exp)
    
    exp_bullets = [
        "Supported the organization of 3&ndash;4 coding competitions and hackathons.",
        "Assisted with event promotion, venue management and participant coordination.",
        "Worked with the organizing team to support smooth execution of technical events.",
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"&bull;&nbsp; {b}", bullet_style))
    story.append(Spacer(1, 3))

    # Extracurricular
    story.append(Paragraph("<b>EXTRACURRICULAR</b>", ParagraphStyle("SubHead", fontName="Helvetica-Bold", fontSize=8.5, leading=10, textColor=colors.black)))
    story.append(Paragraph("<b>NCC Cadet &mdash; CQMS</b>", body_text))
    ncc_bullets = [
        "NCC B Certificate",
        "Best Drill Cadet, Army Attachment Camp, November 2025",
    ]
    for b in ncc_bullets:
        story.append(Paragraph(f"&bull;&nbsp; {b}", bullet_style))
    story.append(Spacer(1, 4))

    # 5. Projects
    add_section_header("PROJECTS")
    
    # Project 1: AcademIQ
    p1_head = [
        [
            Paragraph(
                '<b>AcademIQ | AI-Assisted Development</b> | '
                '<a href="https://github.com/Shivam3635/AcademIQ" color="#000000"><u>Github</u></a> '
                '<a href="https://academ-iq-sigma.vercel.app" color="#000000"><u>Website</u></a><br/>'
                '<i>Lead Developer</i>',
                body_text
            ),
            Paragraph("<para align='right'>2026 - Present</para>", body_text)
        ]
    ]
    t_p1 = Table(p1_head, colWidths=[410, 130])
    t_p1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_p1)
    p1_bullets = [
        "Developed and deployed a centralized academic information platform for managing college notices, academic calendars and student information.",
        "Implemented student dashboard, real-time notice board, academic calendar and administrator CRUD functionality through an AI-assisted development workflow.",
        "Configured Firebase Authentication and Cloud Firestore and managed environment configuration for deployment.",
        "Used Git/GitHub for source-code management and deployed the application to a live environment."
    ]
    for b in p1_bullets:
        story.append(Paragraph(f"&bull;&nbsp; {b}", bullet_style))
    story.append(Paragraph("<b>Technologies/ Tools Used :</b> Next.js, Tailwind CSS", bullet_style))
    story.append(Spacer(1, 3))

    # Project 2: JanSetu
    p2_head = [
        [
            Paragraph(
                '<b>JanSetu | AI-Assisted Development</b> | '
                '<a href="https://github.com/Shivam3635/JanSetuAI" color="#000000"><u>Github</u></a> '
                '<a href="https://jan-setu-ai-phi.vercel.app/" color="#000000"><u>Website</u></a><br/>'
                '<i>Developer</i>',
                body_text
            ),
            Paragraph("<para align='right'>2026 - Present</para>", body_text)
        ]
    ]
    t_p2 = Table(p2_head, colWidths=[410, 130])
    t_p2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_p2)
    p2_bullets = [
        "Developed and deployed an AI-powered civic platform designed to transform multilingual citizen infrastructure feedback into actionable insights.",
        "Contributed through project research, solution ideation and prompt-driven AI-assisted development.",
        "Configured application environment variables and managed the project using Git/GitHub.",
        "Presented the project as a team of two at the Code for Community Hackathon 2026 and received appreciation from judges."
    ]
    for b in p2_bullets:
        story.append(Paragraph(f"&bull;&nbsp; {b}", bullet_style))
    story.append(Paragraph("<b>Technologies/ Tools Used :</b> Antigravity, Flask, HTML, CSS, JavaScript, Firestore", bullet_style))
    story.append(Spacer(1, 4))

    # 6. Hackathons
    add_section_header("HACKATHONS")
    story.append(Paragraph("<b>Smart India Hackathon 2026 &mdash; Internal Selection Qualified</b>", body_text))
    story.append(Paragraph("<b>Project: Vaidrith &mdash; IP-SAKTI Sahayak</b>", bullet_style))
    sih_bullets = [
        "Worked in a 6-member team on a multilingual RAG-based AI assistant for intellectual property and regulatory guidance in Ayurveda.",
        "Responsible for presentation and PPT design.",
        "Presented the project during the internal selection and qualified for the next stage."
    ]
    for b in sih_bullets:
        story.append(Paragraph(f"&bull;&nbsp; {b}", bullet_style))
    story.append(Spacer(1, 2))

    story.append(Paragraph("<b>Code for Community Hackathon 2026 &mdash; CMP Degree College &times; GDG Prayagraj</b>", body_text))
    story.append(Paragraph("<b>Project: JanSetu | Team of 2</b>", bullet_style))
    cfg_bullets = [
        "Contributed through research and AI prompting.",
        "Received appreciation from judges for the project."
    ]
    for b in cfg_bullets:
        story.append(Paragraph(f"&bull;&nbsp; {b}", bullet_style))
    story.append(Spacer(1, 4))

    # 7. Skills
    add_section_header("SKILLS")
    skills_table_data = [
        [Paragraph("<b>Programming Languages :</b>", skills_label), Paragraph("C, Java, Python, C#, JavaScript, SQL", skills_val)],
        [Paragraph("<b>Frameworks &amp; Libraries :</b>", skills_label), Paragraph("Flask", skills_val)],
        [Paragraph("<b>Tools &amp; Platforms :</b>", skills_label), Paragraph("Git, GitHub, Linux", skills_val)],
        [Paragraph("<b>Databases :</b>", skills_label), Paragraph("MySQL, Firebase", skills_val)],
        [Paragraph("<b>Soft Skills :</b>", skills_label), Paragraph("Communication, Leadership, Teamwork, Problem Solving, Critical Thinking, Time Management", skills_val)],
        [Paragraph("<b>Languages :</b>", skills_label), Paragraph("English, Hindi", skills_val)],
    ]
    t_skills = Table(skills_table_data, colWidths=[150, 390])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_skills)

    doc.build(story)
    print(f"Generated {filename}")

if __name__ == "__main__":
    build_pdf()
