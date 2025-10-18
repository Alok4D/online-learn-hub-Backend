# BAC Backend Project

## Overview

This project is a backend API developed for BAC (Bangladesh Academy of Courses).  
The system supports different user roles — Student, Mentor, and Admin — each having access to Authentication, Profile Management, Academic Management, and User Management functionalities.

---

## Features

### 1. Authentication  
- **Student, Mentor, Admin** can login, logout, and update their password.

### 2. Profile Management  
- Each user (Student, Mentor, Admin) can view and update their profile.

### 3. Academic Management  
- **Student**: Enroll in courses, view class routine, recorded videos, notices, and exam results.  
- **Mentor**: Manage exams, class routines, recorded videos, and exam results.  
- **Admin**: Manage students, mentors, courses, and categories.

### 4. User Management  
- **Admin**: Manage user accounts, passwords, block or delete users.

---

## Data Modeling (Schema Overview)

### User  
- `_id: string`  
- `id: string`  
- `password: string`  
- `isPasswordChanged: boolean`  
- `role: 'student' | 'mentor' | 'admin'`  
- `status: 'active' | 'blocked' | 'pending'`  
- `isDeleted: boolean`  
- `createdAt: Date`  
- `updatedAt: Date`  

### Student  
- `_id, id, name, gender, dateOfBirth, email, contactNo, emergencyContact, address, guardian, profileImg, courseName, createdAt, updatedAt`  
- `gender: 'male' | 'female' | 'other'`

### Mentor  
- `_id, id, name, gender, dateOfBirth, email, contactNo, emergencyContact, address, profileImg, designation, departmentName`  
- `specialized_area: string[]`  
- `education_qualification: string[]`  
- `workExperience: string[]`  
- `experienceYears: string`  
- `experienceTrainedStudents: string`  
- `reviews: number`  
- `bio: string`  
- `lifeJourney: string`  
- `createdAt, updatedAt`

### Admin  
- `_id, id, name, gender, dateOfBirth, email, contactNo, emergencyContact, address, profileImg, status, managementDepartment, createdAt, updatedAt`

### Course  
- `id, title, slug, category, type, image, fee, rating, totalRating, totalStudentsEnroll`  
- `mentorName, mentordesignation, mentorSubject, mentorImg, mentorReviews, mentorExperience, mentorBio`  
- `technology, courseStart, durationMonth, lectures, totalExam, totalProject`  
- `details, courseOverview, curriculum: string[]`  
- `courseIncludes: { icon: string; text: string }[]`  
- `softwareYoullLearn: string[]`  
- `jobPositions: string[]`

### Category  
- `id, name, slug, icon`

### SeminarEvent  
- `id, speaker, title, date (YYYY-MM-DD), time (HH:mm), image`

### Certification  
- `id, name, image, phoneNumber, email, studentId, courseName, batchName`

### Student Review  
- `id, title, studentName?, studentImg?, description?, date?, videoUrl?`

---

## Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB** with **Mongoose**  
- **TypeScript**  
- **dotenv** (Environment variables)  
- **cors** (Cross-Origin Resource Sharing)  

---

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)  
- MongoDB (local or cloud instance)  
- npm or yarn package manager  

### Installation

1. Clone the repository:  
```bash
git clone https://github.com/Alok4D/Backend
cd Backend
