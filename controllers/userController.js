let user = [];

const template = (user) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Node Static Server</title>
            </head>
            <body>
                <h1>${user.name}</h1>
                <h2>Age: ${user.age} </h2>
                <p>${user.name} was born ${user.dob}</p>
                <strong>${user.skills.join(', ')}</strong>
                
                <ul id='skill'>
                    ${user.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
                <h2>Education</h2>
                <p>${user.education}</p>
                <h2>Projects</h2>
                <ul id='projects'>
                    ${user.projects.map(project => `<li>${project}</li>`).join('')}
                </ul>
            </body>
        </html>
    `;
};

exports.getAllUser = (req,res) => {
        res.status(200).json(user);
        const htmlContent = template(user);
        res.send(htmlContent);
};

exports.postUserDetails = (req, res) => {
    // user = {...req.body};
    //if you want to do it as array based api then say 
    user = [...user, {...req.body}];
    res.status(200).json(user);
};

exports.putSkills = (req,res)=>{
    user = {...req.body,skills:req.body.skills || []};
    res.status(200).json(user);
}

exports.putEducation = (req,res)=>{
    user = {...req.body,skills:req.body.education};
    res.status(200).json(user);
}

exports.putProjects = (req,res)=>{
    user = {...req.body,skills:req.body.projects || []};
    res.status(200).json(user);
}

exports.updateUser = (req, res) => {
    const { id } = req.params;
    user[id] = req.body;
    res.status(200).json(user);
}

exports.deleteUser = (req,res) =>{
    user = {};
    res.status(200).json(user);
}

exports.deleteUserbyId = (req,res)=>{
    const { id } = req.params;
    user.splice(id-1,1);
    res.status(200).json(user);
}