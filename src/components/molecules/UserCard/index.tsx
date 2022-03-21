import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import red from '@material-ui/core/colors/red'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { FaMale, FaFemale, FaTrashAlt } from 'react-icons/fa'

const styles = theme => ({
  card: {
    minWidth: 220,
    maxWidth: 220,
    minHeight: 320,
    borderRadius: 10,
    padding: 5,
  },
  content: {
    padding: 5,
  },
  media: {
    padding: 10,
    borderRadius: 10,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginBottom: 15,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  deleteBtn: {
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 0,
  },
  title: {
    fontSize: 16,
    paddingTop: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
    textAlign: 'left',
  },
  FaFemaleIcon: {
    color: red[200],
    borderColor: red[200],
  },
  FaMaleIcon: {
    color: 'c5cae9',
    borderColor: 'c5cae9',
  },
  FaDeleteIcon: {
    color: '#9db2b2',
    border: 'none',
    fontSize: '1.3em',
    marginLeft: 10,
    marginTop: 1,
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
})

const UserCard = props => {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <CardMedia
          component="img"
          alt={props.name}
          className={classes.media}
          height="140"
          image={props.picture}
          title={props.name}
        />

        <Typography>
          {props.gender === 'male' ? (
            <FaMale className={classes.FaMaleIcon} />
          ) : (
            <FaFemale className={classes.FaFemaleIcon} />
          )}
        </Typography>
        <br />
        <Typography className={classes.title} color="textSecondary">
          {props.name}&nbsp;&nbsp;({props.nat})
          {props.nat === 'US' ? <span className="flagIcon"></span> : ''}
        </Typography>

        {props.nat !== 'US' ? <br /> : ''}

        <Typography className={classes.pos} color="textSecondary">
          {props.address}
          <br />
          {props.email}
        </Typography>
        <CardActions>
          <Button
            onClick={() => props.onDelete(props.id)}
            className={classes.deleteBtn}
            size="small"
          >
            Delete <FaTrashAlt className={classes.FaDeleteIcon} />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(UserCard)
